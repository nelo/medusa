import { Store } from "@medusajs/medusa"
import { useAdminStore, useAdminUpdateStore } from "medusa-react"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import BackButton from "../../components/atoms/back-button"
import Input from "../../components/molecules/input"
import BodyCard from "../../components/organisms/body-card"
import useNotification from "../../hooks/use-notification"
import { getErrorMessage } from "../../utils/error-messages"

type AccountDetailsFormData = {
  name: string
  swap_link_template: string | undefined
  payment_link_template: string | undefined
  invite_link_template: string | undefined
  metadata: Record<string, unknown> | undefined
}

const AccountDetails = () => {
  const { register, reset, handleSubmit } = useForm<AccountDetailsFormData>()
  const { store } = useAdminStore()
  const { mutate } = useAdminUpdateStore()
  const notification = useNotification()
  const { t } = useTranslation()

  const handleCancel = () => {
    if (store) {
      reset(mapStoreDetails(store))
    }
  }

  useEffect(() => {
    handleCancel()
  }, [store])

  const onSubmit = (data: AccountDetailsFormData) => {
    const validateSwapLinkTemplate = validateUrl(data.swap_link_template)
    const validatePaymentLinkTemplate = validateUrl(data.payment_link_template)
    const validateInviteLinkTemplate = validateUrl(data.invite_link_template)

    if (!validateSwapLinkTemplate) {
      notification(
        t("settings-error", "Error"),
        t("settings-malformed-swap-url", "Malformed swap url"),
        "error"
      )
      return
    }

    if (!validatePaymentLinkTemplate) {
      notification(
        t("settings-error", "Error"),
        t("settings-malformed-payment-url", "Malformed payment url"),
        "error"
      )
      return
    }

    if (!validateInviteLinkTemplate) {
      notification(
        t("settings-error", "Error"),
        t("settings-malformed-invite-url", "Malformed invite url"),
        "error"
      )
      return
    }

    const inputData = {
      ...data,
      metadata: {
        ...store.metadata,
        ...data.metadata,
      }
    }

    mutate(inputData, {
      onSuccess: () => {
        notification(
          t("settings-success", "Success"),
          t(
            "settings-successfully-updated-store",
            "Successfully updated store"
          ),
          "success"
        )
      },
      onError: (error) => {
        notification(
          t("settings-error", "Error"),
          getErrorMessage(error),
          "error"
        )
      },
    })
  }

  return (
    <form className="flex-col py-5">
      <div className="max-w-[632px]">
        <BackButton
          path="/a/settings/"
          label={t("settings-back-to-settings", "Back to settings")}
          className="mb-xsmall"
        />
        <BodyCard
          events={[
            {
              label: t("settings-save", "Save"),
              type: "button",
              onClick: handleSubmit(onSubmit),
            },
            {
              label: t("settings-cancel", "Cancel"),
              type: "button",
              onClick: handleCancel,
            },
          ]}
          title={t("settings-store-details", "Store Details")}
          subtitle={t(
            "settings-manage-your-business-details",
            "Manage your business details"
          )}
        >
          <div className="gap-y-xlarge mb-large flex flex-col">
            <div>
              <h2 className="inter-base-semibold mb-base">
                {t("settings-general", "General")}
              </h2>
              <Input
                  label={t("settings-store-name", "Store name")}
                  {...register("name")}
                  placeholder={t("settings-medusa-store", "Medusa Store")}
              />
              <Input className="mt-2"
                     label={t("settings-store-stock-location-address", "Stock location address")}
                     {...register("metadata.stock_location_address")}
                     placeholder={"MEANDRO 39, Atlanta, Cuautitlán Izcalli, 54740 Estado de Mexico"}
              />
              <Input className="mt-2"
                     label={t("settings-store-stock-location-zipcode", "Stock location zipcode")}
                     {...register("metadata.stock_location_zipcode")}
                     placeholder={"54740"}
              />
              <Input className="mt-2"
                     label={t("settings-store-stock-location-reference", "Stock location reference")}
                     {...register("metadata.stock_location_reference")}
                     placeholder={"casa color negro, frente a la escuela"}
              />
              <Input className="mt-2"
                     label={t("settings-store-stock-location-contact-first-name", "Stock location contact first name")}
                     {...register("metadata.stock_location_contact_first_name")}
                     placeholder={"Alberto"}
              />
              <Input className="mt-2"
                     label={t("settings-store-stock-location-contact-last-name", "Stock location contact last name")}
                     {...register("metadata.stock_location_contact_last_name")}
                     placeholder={"Jiménez"}
              />
              <Input className="mt-2"
                     label={t("settings-store-stock-location-contact-phone", "Stock location contact phone")}
                     {...register("metadata.stock_location_contact_phone")}
                     placeholder={"+525530950987"}
              />
              <Input className="mt-2"
                     label={t("settings-store-stock-location-contact-email", "Stock location contact email")}
                     {...register("metadata.stock_location_contact_email")}
                     placeholder={"test@nelo.co"}
              />
            </div>
            {/* ADVANCED SETTINGS: we don't need them right now */}
            {/*<div>*/}
            {/*  <h2 className="inter-base-semibold mb-base">*/}
            {/*    {t("settings-advanced-settings", "Advanced settings")}*/}
            {/*  </h2>*/}
            {/*  <Input*/}
            {/*    label={t("settings-swap-link-template", "Swap link template")}*/}
            {/*    {...register("swap_link_template")}*/}
            {/*    placeholder="https://acme.inc/swap={swap_id}"*/}
            {/*  />*/}
            {/*  <Input*/}
            {/*    className="mt-base"*/}
            {/*    label={t(*/}
            {/*      "settings-draft-order-link-template",*/}
            {/*      "Draft order link template"*/}
            {/*    )}*/}
            {/*    {...register("payment_link_template")}*/}
            {/*    placeholder="https://acme.inc/payment={payment_id}"*/}
            {/*  />*/}
            {/*  <Input*/}
            {/*    className="mt-base"*/}
            {/*    label={t(*/}
            {/*      "settings-invite-link-template",*/}
            {/*      "Invite link template"*/}
            {/*    )}*/}
            {/*    {...register("invite_link_template")}*/}
            {/*    placeholder="https://acme-admin.inc/invite?token={invite_token}"*/}
            {/*  />*/}
            {/*</div>*/}
          </div>
        </BodyCard>
      </div>
    </form>
  )
}

const validateUrl = (address: string | undefined) => {
  if (!address || address === "") {
    return true
  }

  try {
    const url = new URL(address)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch (_) {
    return false
  }
}

const mapStoreDetails = (store: Store): AccountDetailsFormData => {
  return {
    name: store.name,
    swap_link_template: store.swap_link_template,
    payment_link_template: store.payment_link_template,
    invite_link_template: store.invite_link_template,
    metadata: store.metadata
  }
}

export default AccountDetails
