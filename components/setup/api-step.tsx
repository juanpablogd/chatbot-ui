import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FC } from "react"
import { Button } from "../ui/button"

interface APIStepProps {
  openaiAPIKey: string
  openaiOrgID: string
  azureOpenaiAPIKey: string
  azureOpenaiEndpoint: string
  azureOpenai35TurboID: string
  azureOpenai45TurboID: string
  azureOpenai45VisionID: string
  anthropicAPIKey: string
  googleGeminiAPIKey: string
  mistralAPIKey: string
  perplexityAPIKey: string
  useAzureOpenai: boolean
  openrouterAPIKey: string
  alphaiAPIKey: string
  onOpenrouterAPIKeyChange: (value: string) => void
  onOpenaiAPIKeyChange: (value: string) => void
  onOpenaiOrgIDChange: (value: string) => void
  onAzureOpenaiAPIKeyChange: (value: string) => void
  onAzureOpenaiEndpointChange: (value: string) => void
  onAzureOpenai35TurboIDChange: (value: string) => void
  onAzureOpenai45TurboIDChange: (value: string) => void
  onAzureOpenai45VisionIDChange: (value: string) => void
  onAnthropicAPIKeyChange: (value: string) => void
  onGoogleGeminiAPIKeyChange: (value: string) => void
  onMistralAPIKeyChange: (value: string) => void
  onPerplexityAPIKeyChange: (value: string) => void
  onUseAzureOpenaiChange: (value: boolean) => void,
  onAlphaiAPIKeyChange: (value: string) => void
}

export const APIStep: FC<APIStepProps> = ({
  openaiAPIKey,
  openaiOrgID,
  azureOpenaiAPIKey,
  azureOpenaiEndpoint,
  azureOpenai35TurboID,
  azureOpenai45TurboID,
  azureOpenai45VisionID,
  anthropicAPIKey,
  googleGeminiAPIKey,
  mistralAPIKey,
  perplexityAPIKey,
  openrouterAPIKey,
  useAzureOpenai,
  alphaiAPIKey,
  onOpenaiAPIKeyChange,
  onOpenaiOrgIDChange,
  onAzureOpenaiAPIKeyChange,
  onAzureOpenaiEndpointChange,
  onAzureOpenai35TurboIDChange,
  onAzureOpenai45TurboIDChange,
  onAzureOpenai45VisionIDChange,
  onAnthropicAPIKeyChange,
  onGoogleGeminiAPIKeyChange,
  onMistralAPIKeyChange,
  onPerplexityAPIKeyChange,
  onUseAzureOpenaiChange,
  onOpenrouterAPIKeyChange,
  onAlphaiAPIKeyChange
}) => {
  return (
    <>
      <div className="mt-5 space-y-2">
        <Label className="flex items-center">
          <div>
            {useAzureOpenai ? "Azure OpenAI API Key" : "OpenAI API Key"}
          </div>

          <Button
            className="ml-3 h-[18px] w-[130px] text-[11px]"
            onClick={() => onUseAzureOpenaiChange(!useAzureOpenai)}
          >
            {useAzureOpenai ? "Use Standard OpenAI" : "Use Azure OpenAI"}
          </Button>
        </Label>

        <Input
          placeholder={
            useAzureOpenai ? "Azure OpenAI API Key" : "OpenAI API Key"
          }
          type="password"
          value={useAzureOpenai ? azureOpenaiAPIKey : openaiAPIKey}
          onChange={e =>
            useAzureOpenai
              ? onAzureOpenaiAPIKeyChange(e.target.value)
              : onOpenaiAPIKeyChange(e.target.value)
          }
        />
      </div>

      <div className="ml-8 space-y-3">
        {useAzureOpenai ? (
          <>
            <div className="space-y-1">
              <Label>Azure OpenAI Endpoint</Label>

              <Input
                placeholder="https://your-endpoint.openai.azure.com"
                type="password"
                value={azureOpenaiEndpoint}
                onChange={e => onAzureOpenaiEndpointChange(e.target.value)}
              />
            </div>

            <div className="space-y-1">
              <Label>Azure OpenAI GPT-3.5 Turbo ID</Label>

              <Input
                placeholder="Azure OpenAI GPT-3.5 Turbo ID"
                type="password"
                value={azureOpenai35TurboID}
                onChange={e => onAzureOpenai35TurboIDChange(e.target.value)}
              />
            </div>

            <div className="space-y-1">
              <Label>Azure OpenAI GPT-4.5 Turbo ID</Label>

              <Input
                placeholder="Azure OpenAI GPT-4.5 Turbo ID"
                type="password"
                value={azureOpenai45TurboID}
                onChange={e => onAzureOpenai45TurboIDChange(e.target.value)}
              />
            </div>

            <div className="space-y-1">
              <Label>Azure OpenAI GPT-4.5 Vision ID</Label>

              <Input
                placeholder="Azure OpenAI GPT-4.5 Vision ID"
                type="password"
                value={azureOpenai45VisionID}
                onChange={e => onAzureOpenai45VisionIDChange(e.target.value)}
              />
            </div>
          </>
        ) : (
          <>
            <div className="space-y-1">
              <Label>OpenAI Organization ID</Label>

              <Input
                placeholder="OpenAI Organization ID (optional)"
                type="password"
                value={openaiOrgID}
                onChange={e => onOpenaiOrgIDChange(e.target.value)}
              />
            </div>
          </>
        )}
      </div>

      <div className="space-y-1">
        <Label>Alphai API Key</Label>

        <Input
          placeholder="Alphai API Key"
          type="password"
          value={alphaiAPIKey}
          onChange={e => onAlphaiAPIKeyChange(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <Label>Anthropic API Key</Label>

        <Input
          placeholder="Anthropic API Key"
          type="password"
          value={anthropicAPIKey}
          onChange={e => onAnthropicAPIKeyChange(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <Label>Google Gemini API Key</Label>

        <Input
          placeholder="Google Gemini API Key"
          type="password"
          value={googleGeminiAPIKey}
          onChange={e => onGoogleGeminiAPIKeyChange(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <Label>Mistral API Key</Label>

        <Input
          placeholder="Mistral API Key"
          type="password"
          value={mistralAPIKey}
          onChange={e => onMistralAPIKeyChange(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <Label>Perplexity API Key</Label>

        <Input
          placeholder="Perplexity API Key"
          type="password"
          value={perplexityAPIKey}
          onChange={e => onPerplexityAPIKeyChange(e.target.value)}
        />
      </div>
      <div className="space-y-1">
        <Label>OpenRouter API Key</Label>

        <Input
          placeholder="OpenRouter API Key"
          type="password"
          value={openrouterAPIKey}
          onChange={e => onOpenrouterAPIKeyChange(e.target.value)}
        />
      </div>
    </>
  )
}
