import os
OPENAI_API_KEY = "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"
os.environ["OPENAI_API_KEY"] = OPENAI_API_KEY
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain_openai import OpenAI
template = """Question: {question}

Answer: Let's think step by step."""

prompt = PromptTemplate(template=template, input_variables=["question"])
llm = OpenAI(openai_api_key=OPENAI_API_KEY)
question = "What NFL team won the Super Bowl in the year Justin Beiber was born?"
llm_chain = LLMChain(prompt=prompt, llm=llm)
print(llm_chain.run(question))