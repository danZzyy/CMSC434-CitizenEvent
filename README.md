# CMSC434-CitizenEvent
Project for CMSC434 (Introduction to Human Computer Interaction) Spring 2017 at the University of Maryland
https://www.cs.umd.edu/class/spring2017/cmsc434/

### Contributors:
 * Daniil Zadorozhnyy
 * Isabella Seeman
 * Nathan Baihly
 * Kyle Delancy
 
## Using Git for this project
### When you start
* Install Git onto your machine if you have not already (https://git-scm.com/downloads)
* In your terminal, go to a folder when you would like to keep this project and clone this repo. Go to the "clone or download" button on the repo page and copy the url into this command
```
git clone <repo url>
```
* Now you have the project code on your machine
### Branching
* Your work should be based on a working version of the project and should not be merged into the master branch until they have been thoroughly tested and approved by others
* In order to do this, you will need to make a branch. Under "Branch:..." in the repo page, type in the name for a new branch and it will create a new one.
* On your terminal, do 
```
git fetch
```
to check for new branches and
```
git checkout <branch name>
```
to switch into your branch
* Do all  your work in the branch, NOT MASTER, bad things can happen
* Each branch should be worked on by one person at a time.
### Updating locally
* Often, other members' changes will be merged into the master branch and you will have to merge these changges into your branch. Sometimes this will set you back in what you were working on, in which case we should talk about it.
* To update your local version of the repository, you have to explicitly run these commands:
```
git checkout master
git pull
git checkout <your branch>
git merge master
```
* So to review what these commands do, first move into the master branch, pull to check for updates from the remote master branch and update your local master with any changes, then move into your branch with all your work and update it with changes from master
### Submitting your code
* ALWAYS do the previous step before submitting your code.
* You will need to stage your changed files into a commit which will then be pushed to the remote version of your branch for approval  to be merged or make changes.
```
git status
```
newly changed files will appear in red
```
git add <file1> <file2> etc...
```
stage these files for commit. Only stage the files you changed that are relevant to the task.
```
git commit
```
VIM will be opened. write your commit message in the first line describing your changes, following lines for more thorough description.
```
git  commit -m "<commit description>"
```
if you want to be quick and not deal with VIM and just write the commit title
```
git push
```
this will update the branch of the same name
* On the repo page next to the branch button click "New pull request" and make a pull request comparing your branch to master. A pull request is a way to ask for a code review from other contributors.
* Once we are all good on the changes, which we should always discuss, the pull request can be merged, merging the branch into master. Usually, do not do this without someone looking over your work first.
### Merge Conflicts
* Uhh I know how to deal with these but I don't know how well I can explain it. Ask Ella.
