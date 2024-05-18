import {
  adminOrderKeys,
  useAdminCancelClaimFulfillment,
  useAdminCancelFulfillment,
  useAdminCancelSwapFulfillment, useMedusa,
} from "medusa-react"
import { useTranslation } from "react-i18next"
import IconBadge from "../../../../components/fundamentals/icon-badge"
import BuildingsIcon from "../../../../components/fundamentals/icons/buildings-icon"
import CancelIcon from "../../../../components/fundamentals/icons/cancel-icon"
import PackageIcon from "../../../../components/fundamentals/icons/package-icon"
import Actionables from "../../../../components/molecules/actionables"
import useImperativeDialog from "../../../../hooks/use-imperative-dialog"
import useNotification from "../../../../hooks/use-notification"
import useStockLocations from "../../../../hooks/use-stock-locations"
import { getErrorMessage } from "../../../../utils/error-messages"
import { TrackingLink } from "./tracking-link"
import { capitalize } from "lodash"
import {QueryKey, useMutation, useQueryClient} from "@tanstack/react-query";
import moment from "moment/moment";


export const useAdminDeliverFulfillment = (orderId: string) => {
  const { client } = useMedusa()
  const queryClient = useQueryClient()

  return useMutation(
    (fulfillmentId: string) =>
      client.client.request(
        `POST`,
        `/admin/orders/${orderId}/fulfillments/${fulfillmentId}/delivery`,
        undefined,
        {},
        {}
      ),
    {
      onSuccess: () => {
        ;[adminOrderKeys.lists(), adminOrderKeys.detail(orderId)].forEach(
          (key) => {
            queryClient.invalidateQueries({ queryKey: key as QueryKey })
          }
        )
      },
    }
  )
}

export const useAdminFailFulfillment = (orderId: string) => {
  const { client } = useMedusa()
  const queryClient = useQueryClient()

  return useMutation(
      (fulfillmentId: string) =>
          client.client.request(
              `POST`,
              `/admin/orders/${orderId}/fulfillments/${fulfillmentId}/failure`,
              undefined,
              {},
              {}
          ),
      {
        onSuccess: () => {
          ;[adminOrderKeys.lists(), adminOrderKeys.detail(orderId)].forEach(
              (key) => {
                queryClient.invalidateQueries({ queryKey: key as QueryKey })
              }
          )
        },
      }
  )
}

export const useAdminMissingInformationFulfillment = (orderId: string) => {
  const { client } = useMedusa()
  const queryClient = useQueryClient()

  return useMutation(
      (fulfillmentId: string) =>
          client.client.request(
              `POST`,
              `/admin/orders/${orderId}/fulfillments/${fulfillmentId}/missing-information`,
              undefined,
              {},
              {}
          ),
      {
        onSuccess: () => {
          ;[adminOrderKeys.lists(), adminOrderKeys.detail(orderId)].forEach(
              (key) => {
                queryClient.invalidateQueries({ queryKey: key as QueryKey })
              }
          )
        },
      }
  )
}

export const FormattedFulfillment = ({
  setFullfilmentToShip,
  order,
  fulfillmentObj,
}) => {
  const dialog = useImperativeDialog()
  const notification = useNotification()
  const { t } = useTranslation()

  const cancelFulfillment = useAdminCancelFulfillment(order.id)
  const cancelSwapFulfillment = useAdminCancelSwapFulfillment(order.id)
  const cancelClaimFulfillment = useAdminCancelClaimFulfillment(order.id)
  const deliverFulfillment = useAdminDeliverFulfillment(order.id)
  const failFulfillment = useAdminFailFulfillment(order.id)
  const missingInformationFulfillment = useAdminMissingInformationFulfillment(order.id)
  const { getLocationNameById } = useStockLocations()

  const { fulfillment } = fulfillmentObj
  const hasLinks = !!fulfillment.tracking_links?.length

  const getData = () => {
    switch (true) {
      case !!fulfillment?.claim_order_id:
        return {
          resourceId: fulfillment.claim_order_id,
          resourceType: "claim",
        }
      case !!fulfillment?.swap_id:
        return {
          resourceId: fulfillment.swap_id,
          resourceType: "swap",
        }
      default:
        return { resourceId: order?.id, resourceType: "order" }
    }
  }

  const handleCancelFulfillment = async () => {
    const { resourceId, resourceType } = getData()

    const shouldCancel = await dialog({
      heading: t("templates-cancel-fulfillment-heading", "Cancel fulfillment?"),
      text: t(
        "templates-are-you-sure-you-want-to-cancel-the-fulfillment",
        "Are you sure you want to cancel the fulfillment?"
      ),
    })

    if (!shouldCancel) {
      return
    }

    switch (resourceType) {
      case "swap":
        return cancelSwapFulfillment.mutate(
          { swap_id: resourceId, fulfillment_id: fulfillment.id },
          {
            onSuccess: () =>
              notification(
                t("templates-success", "Success"),
                t(
                  "templates-successfully-canceled-swap",
                  "Successfully canceled swap"
                ),
                "success"
              ),
            onError: (err) =>
              notification(
                t("templates-error", "Error"),
                getErrorMessage(err),
                "error"
              ),
          }
        )
      case "claim":
        return cancelClaimFulfillment.mutate(
          { claim_id: resourceId, fulfillment_id: fulfillment.id },
          {
            onSuccess: () =>
              notification(
                t("templates-success", "Success"),
                t(
                  "templates-successfully-canceled-claim",
                  "Successfully canceled claim"
                ),
                "success"
              ),
            onError: (err) =>
              notification(
                t("templates-error", "Error"),
                getErrorMessage(err),
                "error"
              ),
          }
        )
      default:
        return cancelFulfillment.mutate(fulfillment.id, {
          onSuccess: () =>
            notification(
              t("templates-success", "Success"),
              t(
                "templates-successfully-canceled-fulfillment",
                "Successfully canceled fulfillment"
              ),
              "success"
            ),
          onError: (err) =>
            notification(
              t("templates-error", "Error"),
              getErrorMessage(err),
              "error"
            ),
        })
    }
  }

  const handleDeliverFulfillment = async () => {
    const { resourceId, resourceType } = getData()

    const shouldDeliver = await dialog({
      heading: t("templates-deliver-fulfillment-heading", "Mark fulfillment as delivered?"),
      text: t(
          "templates-are-you-sure-you-want-to-deliver-the-fulfillment",
          "Are you sure you want to mark the fulfillment as delivered?"
      ),
    })

    if (!shouldDeliver) {
      return
    }

    switch (resourceType) {
      case "order":
        return deliverFulfillment.mutate(fulfillment.id, {
          onSuccess: () =>
              notification(
                  t("templates-success", "Success"),
                  t(
                      "templates-successfully-marked-fulfillment-as-delivered",
                      "Successfully marked fulfillment as delivered"
                  ),
                  "success"
              ),
          onError: (err) =>
              notification(
                  t("templates-error", "Error"),
                  getErrorMessage(err),
                  "error"
              ),
        })
      default:
        console.log(`Resource type ${resourceType} not supported for delivery`)
    }
  }

  const handleFailFulfillment = async () => {
    const { resourceId, resourceType } = getData()

    const shouldFail = await dialog({
      heading: t("templates-fail-fulfillment-heading", "Mark fulfillment as failed?"),
      text: t(
          "templates-are-you-sure-you-want-to-fail-the-fulfillment",
          "Are you sure you want to mark the fulfillment as failed?"
      ),
    })

    if (!shouldFail) {
      return
    }

    switch (resourceType) {
      case "order":
        return failFulfillment.mutate(fulfillment.id, {
          onSuccess: () =>
              notification(
                  t("templates-success", "Success"),
                  t(
                      "templates-successfully-marked-fulfillment-as-failed",
                      "Successfully marked fulfillment as failed"
                  ),
                  "success"
              ),
          onError: (err) =>
              notification(
                  t("templates-error", "Error"),
                  getErrorMessage(err),
                  "error"
              ),
        })
      default:
        console.log(`Resource type ${resourceType} not supported for delivery`)
    }
  }

  const handleMissingInformationFulfillment = async () => {
    const { resourceId, resourceType } = getData()

    const shouldFail = await dialog({
      heading: t("templates-missing-information-fulfillment-heading", "Mark fulfillment as missing information?"),
      text: t(
          "templates-are-you-sure-you-want-to-missing-information-the-fulfillment",
          "Are you sure you want to mark the fulfillment as missing-information?"
      ),
    })

    if (!shouldFail) {
      return
    }

    switch (resourceType) {
      case "order":
        return missingInformationFulfillment.mutate(fulfillment.id, {
          onSuccess: () =>
              notification(
                  t("templates-success", "Success"),
                  t(
                      "templates-successfully-marked-fulfillment-as-missing-information",
                      "Successfully marked fulfillment as failed"
                  ),
                  "success"
              ),
          onError: (err) =>
              notification(
                  t("templates-error", "Error"),
                  getErrorMessage(err),
                  "error"
              ),
        })
      default:
        console.log(`Resource type ${resourceType} not supported for delivery`)
    }
  }

  const fulfillmentStatuses: { status: string, at: Date | null }[] = [
    {status: "created", at: fulfillment.created_at ? new Date(fulfillment.created_at) : null},
    {status: "canceled", at: fulfillment.canceled_at ? new Date(fulfillment.canceled_at) : null},
    {status: "shipped", at: fulfillment.shipped_at ? new Date(fulfillment.shipped_at) : null},
    {status: "delivered", at: fulfillment.delivered_at ? new Date(fulfillment.delivered_at) : null},
    {status: "failed", at: fulfillment.failed_at ? new Date(fulfillment.failed_at) : null},
    {status: "missing_information", at: fulfillment.missing_information_at ? new Date(fulfillment.missing_information_at) : null}
  ]

  const currentStatus = fulfillmentStatuses.sort((a, b) =>
      (b.at?.getTime() || 0) - (a.at?.getTime() || 0)
  )[0].status

  console.log("currentStatus", currentStatus)

  return (
    <div className="flex w-full justify-between">
      <div className="flex flex-col space-y-1 py-4">
        <div className="text-grey-90">
          { fulfillmentObj.title }

          {/*
          Commenting out fulfillments titles logic because is not clear how to handle titles for failed and missing_information
          given that we don't have statutes but only timestamped events
           */}

          {/*{((): string => {*/}
          {/*  if (fulfillment.canceled_at) {*/}
          {/*    return t(*/}
          {/*      "templates-fulfillment-has-been-canceled",*/}
          {/*      "Fulfillment has been canceled"*/}
          {/*    )*/}
          {/*  }*/}
          {/*  if (fulfillment.shipped_at && !fulfillment.delivered_at) {*/}
          {/*    return t(*/}
          {/*      "templates-shipped-by-provider",*/}
          {/*      "{{title}} Shipped by {{provider}}",*/}
          {/*      {*/}
          {/*        title: fulfillmentObj.title,*/}
          {/*        provider: capitalize(fulfillment.provider_id),*/}
          {/*      }*/}
          {/*    )*/}
          {/*  }*/}
          {/*  if (fulfillment.delivered_at) {*/}
          {/*    return t(*/}
          {/*      "templates-fulfilled-by-provider",*/}
          {/*      "{{title}} Fulfilled by {{provider}}",*/}
          {/*      {*/}
          {/*        title: fulfillmentObj.title,*/}
          {/*        provider: capitalize(fulfillment.provider_id),*/}
          {/*      }*/}
          {/*    )*/}
          {/*  }*/}
          {/*  return t("templates-not-shipped", "Not shipped")*/}
          {/*})()}*/}
        </div>
        <div className="text-grey-50 flex">
          {!fulfillment.shipped_at
            ? t("templates-not-shipped", "Not shipped")
            : t("templates-tracking", "Tracking")}
          {hasLinks &&
            fulfillment.tracking_links.map((tl, j) => (
              <TrackingLink key={j} trackingLink={tl} />
            ))}
        </div>
        <div className="text-grey-50 flex">
          {t("templates-estimated-delivery-date", "Estimated delivery date")}
          <div className="text-blue-60 ml-2">
            {fulfillment.estimated_delivery_date && moment(fulfillment.estimated_delivery_date).format("DD MMM YYYY")}
          </div>
        </div>
        <div className="text-grey-50 flex">
          {t("templates-delivery-code", "Delivery code")}
          <div className="text-blue-60 ml-2">
            {fulfillment.delivery_code}
          </div>
        </div>
        {!fulfillment.canceled_at && fulfillment.location_id && (
          <div className="flex flex-col">
            <div className="text-grey-50 font-semibold">
              {fulfillment.shipped_at
                ? t("templates-shipped-from", "Shipped from")
                : t("templates-shipping-from", "Shipping from")}{" "}
            </div>
            <div className="flex items-center pt-2">
              <IconBadge className="mr-2">
                <BuildingsIcon />
              </IconBadge>
              {getLocationNameById(fulfillment.location_id)}
            </div>
          </div>
        )}
      </div>
      {/* only show actions when fulfillment is either not canceled or not delivered */}
      {!fulfillment.canceled_at && !fulfillment.delivered_at && (
        <div className="flex items-center space-x-2">
          <Actionables
            actions={[
              {
                label: t("templates-mark-shipped", "Mark Shipped / Edit shipment"),
                icon: <PackageIcon size={"20"} />,
                onClick: () => setFullfilmentToShip(fulfillment),
              },
              {
                label: t("templates-mark-missing-information", "Mark missing information"),
                icon: <PackageIcon size={"20"} />,
                onClick: () => handleMissingInformationFulfillment(),
                disabled: currentStatus === "missing_information" || currentStatus === "created",
              },
              {
                label: t("templates-mark-delivered", "Mark Delivered"),
                icon: <PackageIcon size={"20"} />,
                onClick: () => handleDeliverFulfillment(),
                disabled: currentStatus === "created",
              },
              {
                label: t("templates-mark-failed", "Mark failed"),
                icon: <PackageIcon size={"20"} />,
                onClick: () => handleFailFulfillment(),
                disabled: currentStatus === "failed" || currentStatus === "created",
              },
              {
                label: t("templates-cancel-fulfillment", "Cancel Fulfillment"),
                icon: <CancelIcon size={"20"} />,
                onClick: () => handleCancelFulfillment(),
                disabled: currentStatus !== "created"
              },
            ]}
          />
        </div>
      )}
    </div>
  )
}
