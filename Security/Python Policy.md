
**BEST PRACTICES OF PYTHON SECURITY**

Python is a high-level programming language that can be manipulated to fit into what you want; this means it is flexible. This flexibility has disadvantages - it might open up some loopholes if security practices are not being followed. 

In building software, writing secure code is essential for protecting sensitive data and maintaining correct behaviour of software. 

The general rule is any attack worth reporting via the security address must allow an attacker to affect the confidentiality, integrity and availability of the Python application or its system for which the attacker does not already have the capability. 

Find below security practices in Python: 

1. Ensure to use the Most Recent Major Version of Python 

Any version of Python below Python 3 is old hence vulnerable to attacks. To be protected form vulnerabilities, ensure to use Python 3 or you leave yourself open to security vulnerabilities.  

To check for your Python version, you can run: python –version 

 

2. Import Packages the Right Way 

 When working with external or internal Python modules, you should always ensure you are importing them the right way and using the right paths. Types of 3 types of import paths in Python -  absolute relative and implicit 

In importing packages, ensure to use absolute paths. Absolute imports specifies the path of the resource to be imported using its full path from the project’s root folder since it’s possible for a malicious module with the same name to be in a popular open source library and find its way to the system path. 
If the malicious module is found before the real module it will be imported and could be used to exploit applications that has it in their dependency tree. 

 

3. Never commit anything with a password 

Once you commit with a password, the password will always be there somewhere in a log or database for anyone to find. This should be avoided 

 

4. Keep your servers up to date (in our project we are using safe cloud on Kaggle)

 Sometimes potential dangers have nothing to do with the code but rather the servers. You must check that all your software is updated and compatible with your Python code. Random human error can destroy work that took years of planning. So make sure that the software and security management systems are up to date. 

 
5. Use Bandit 

 Install the package Bandit for each Python project. Bandit scans your code for well-known vulnerabilities, such as common issues with YAML. It ranks the security risk from low to high and tells you which lines of code in question are causing the problem. 

 

6. Use a virtual environment (already applied on the cloud space used in the project)

 Instead of installing packages globally on your machine, use a virtual environment for each project. This means that if you install a package dependency with malicious code in one project, it will not affect the others. Each project’s packages are isolated from each other. 

 

7. Set debug = false 

 For some Python frameworks, such as Django, debug is set to true by default in new projects. This can be helpful in development to show errors in our code, but isn’t so useful when we deploy the project to live on a server available to the public. Displaying errors in our code publicly could show a weakness in our security that will be exploited. 
 So, when deployed live, always set the following: 
 Debug = false 

 

8. Protect against SQL injections 

 SQL injections can drop sensitive data from insecure tables. Hence, SQL injections is to be taken seriously by following updated procedures in protecting the database from SQL injections. 

9. Look out for poisoned packages 


Double-check that you’re using legitimate and updated packages. It’s possible to install packages for Python that have malicious code in them. Check that you have exactly the right names for each package. “00Seven” is a completely different package from”000Seven.” 

You can also make use of platforms that help check that automatically 


10. Handle Python HTTP Requests Safely 

When building Python project that requires sending HTTP requests, it’s always advisable to do it safely and know the library you are using handles security to prevent security issues. 

 

 

 

 

**REFERECES:**

https://www.securecoding.com/blog/python-security-practices-you-should-maintain/ 
https://blog.sqreen.com/top-10-python-security-best-practices/ 

 