import { ModuleRegistrationName } from "@medusajs/modules-sdk"
import { IFulfillmentModuleService } from "@medusajs/types"
import { StepResponse, createStep } from "@medusajs/workflows-sdk"

export const cancelFulfillmentStepId = "cancel-fulfillment"
export const cancelFulfillmentStep = createStep(
  cancelFulfillmentStepId,
  async (id: string, { container }) => {
    const service = container.resolve<IFulfillmentModuleService>(
      ModuleRegistrationName.FULFILLMENT
    )

    await service.cancelFulfillment(id)

    return new StepResponse(void 0, id)
  }
)
