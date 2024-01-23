from voyager import Voyager

import openai
openai.api_type = "azure"
openai.api_base = "https://voyager.openai.azure.com/"
openai.api_version = "2023-07-01-preview"
openai.api_key = "5ea4d624a50a495d9c532bda3665d3de"
# You can also use mc_port instead of azure_login, but azure_login is highly recommended
azure_login = {
    "client_id": "91c66194-9999-442e-a289-777ca1202bfa",
    "redirect_url": "https://127.0.0.1/auth-response",
    "secret_value": "None",
    "version": "fabric-loader-0.14.18-1.19", # the version Voyager is tested on
}
openai_api_key = "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"

voyager = Voyager(
    mc_port=37451,
    openai_api_key=openai.api_key,
)

# start lifelong learning
voyager.learn()
