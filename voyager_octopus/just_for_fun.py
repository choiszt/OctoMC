import os
from random import randint
for day in range(1, 20):
    god=randint(0,10)
    if god<7:
        for commits in range(0, randint(1, 4)):
            commit_day = str(day)+' days ago'
            with open('file.txt', 'a')as file:
                file.write(commit_day)
            os.system('git add just_for_fun.py')
            date_command = f'date -d "{commit_day}" "+%Y-%m-%d %H:%M:%S"'
            commit_date = os.popen(date_command).read().strip()
            commit_command = f'git commit --date="{commit_date}" -m "commit"'
            os.system(commit_command)
os.system('git push -u origin main ')
