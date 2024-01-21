import { LLM } from "@/types"

const ALPHAI_PLATORM_LINK = "http://3.229.238.146:18888/v1"


const openchat_35: LLM = {
  modelId: "openchat_3.5",
  modelName: "openchat_3.5",
  provider: "alphai",
  hostedId: "openchat_3.5",
  platformLink: ALPHAI_PLATORM_LINK,
  imageInput: false
}

export const ALPHAI_LLM_LIST: LLM[] = [openchat_35]
