# AI-Mergency Room Project

## How to install 
1. ```git clone``` this repo to your machine
2. Comparing your project with the clone of the actual AICR project, place your **db-credentials.json**, **daas-credentials.json**, **nlu-credentials.json**, and **google-speech-credentials.json** into the **/node_app** directory
3. Copy/paste your **mapbox-credentials.json** into **/node_app/public/scripts directory**. These files are listed in the .gitignore file to that we can practice good security with our files and not push our own credentials to github.

## Development Workflow
1. Once you have your requirements set, make sure you're on the master branch & go ahead and make a branch with 
```git checkout -b branch-name-involving-your-feature```

2. Once you make changes, check your changes with ```git status``` or ```git diff```, then add, commit and push your changes
	- ```git add .```
	- ```git commit -m 'message about your change'```
	- ```git push origin your-branch-name```
	
2. Make your changes and make sure your code works before you merge it back to master
	- ```git checkout master```
	- ```git pull origin master```
	- ```git merge your-branch-name``` hopefully there aren't too many merge conflicts, fix those and commit again
	- ```git push origin master```

**Project Title**

  *AI-mergency Control Room (AICR)*
       
   * What does AICR do?

		As it is well known that the number of emergency calls increased eightfold 
		over a course of four days when Hurricane Katrina hit the Gulf Coast and
		flooded New Orleans, it is very overwhelming to keep first-responder teams o
		rganized and efficient in emergency situations. AI-mergency Control Room ensures
		that dispatchers stay productive and creates better workflow for first-responders 
		that are involved in these situations.  AICR includes anything from proper
		incident prioritization to visibility and traceability of major events.


   * Goal of the project (who are you developing the project for?)

		The AICR is primarily to help people in dangerous situations such as natural disasters
		and other emergency situations by supporting dispatchers to stay fully productive during
		such circumstances. As a group we would like to contribute to the project by providing a 
		UI and also add more functionality to existing features. We may integrate the AI Fairness 
		360 toolkit into this project to help us make our project as unbiased as possible.

   * How does AICR work?

        AICR automatically transcribes incoming calls and extract all the detailed information by
		the help of Watson Natural Language Understanding and Watson Knowledge Studio. The status
		of the situation and all the incidents are then visualized inorder to give the operator 
		full overview of the current situation which inturn helps the dispatcher to track emergency
		spots and prioritization. AICR is using a database powered by Db2 to store all the call 
		information and allows to trace calls during and after the emergency.

   * Architecture Diagram

   ![Image of Yaktocat](https://developer.ibm.com/developer/openprojects/ai-mergency/images/arch1.png)


   ![Image of Yaktocat](https://developer.ibm.com/developer/openprojects/ai-mergency/images/arch2.jpg)


  * Technology Stack
    
	    * Front-end: React, Node JS, 
        * Database: Db2
		* IBM Cloud Services, Server-side Javascript,
		* Watson Natural Language Understanding, Watson Language Studio




