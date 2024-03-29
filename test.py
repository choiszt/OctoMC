import os


from langchain.embeddings.openai import OpenAIEmbeddings
embeddings = OpenAIEmbeddings(
    deployment="your-embeddings-deployment-name",
    model="your-embeddings-model-name",
    openai_api_base="https://voyager.openai.azure.com/",
    openai_api_type="azure",
)
text = "This is a test query."
query_result = embeddings.embed_query(text)

def gpt_request(content):
    response = openai.ChatCompletion.create(
        engine="voyager",
        messages = [{"role":"user","content":content}],
        temperature=0.7,
        max_tokens=800,
        top_p=0.95,
        frequency_penalty=0,
        presence_penalty=0,
        stop=None
        )
    print(response['choices'][0]['message']['content'])
    return response['choices'][0]['message']['content']
