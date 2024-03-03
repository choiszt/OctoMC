from tqdm import tqdm
import os
import json
import shutil
path="./data"
tasks=os.listdir(path)
def get_biome(tasks):
    result={}
    for task in tqdm(tasks):
        tar_path=os.path.join(path,task,"subtask_1","observe.json")
        with open(tar_path,"r")as f:
            data=json.load(f)
            biome=data[0][1]['status']['biome']
            result[task]=biome
    with open("./biome.json","w")as f:
        f.write(json.dumps(result))
if __name__=="__main__":
    for task in tqdm(sorted(tasks)):
        tar_path=os.path.join(path,task)
        for subtask in sorted(os.listdir(tar_path)):
            subtask_img=[]
            subtask_path=os.path.join(tar_path,subtask)
            for file in os.listdir(subtask_path):
                if file.endswith('png'):
                    subtask_img.append(os.path.join(subtask_path,file))
            for index,png in enumerate(sorted(subtask_img)):
                renamed_path=os.path.join(subtask_path,f"pic{index+1}.png")
                shutil.move(png,renamed_path)
print(png)
                