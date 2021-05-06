---
title: Finance Tracker
layout: template
filename: finance-tracker.md
--- 
# Finance Tracker / Visualizer
A financial tracker / visualization tool used to gain insights about spending habits, trends, and patterns over varying transaction periods. This project was inspired due to deficiencies in RBC's MyFinanceTracker and my interest in personal finance developed during quarantine. I collected my own personal e statements from my RBC account and used the parser function from tika a Python parsing module. Which was used to extract the contents from my credit and debit e statements. Further string parsing techniques were used to extract transaction details and stored in a csv file. After compiling the e statements into a csv file, I was able to create meaningful data visualizations. Using echarts.js a data visualization library. The application should be usable if you are a RBC client. To use this application follow the instructions outlined in the [Getting Started](#getting-started) section.
 
## Disclaimer
Due to the structure and format of RBCs debit e statements the amounts recorded in the compiled csv file for debit transactions are not as accurate as initially intended. Certain deposits and withdrawls are not recorded with their appropriate value and create inconsistencies in total debit account balances. This application should instead be used to gain insights about your personal spending habits and trendsbased on different categories and periods.
 
### Project Outline
 
- [Project Manifest](#project-manifest)
- [Example](#example)
- [Implementation](#implementation)
    - [Extracting Data](#extracting-data)
    - [Visualizing Data](#visualizing-data)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Files](#files)
    - [E Statements](#e-statements)
    - [Category json](#category-json)
        - [Categories](#categories)
        - [Customization](#customization)
    - [CSV](#files)
    - [Execution](#execution)
    - [Visualization](#visualization)
    - [Statistics](#statistics)
 
## Project Manifest
The following is a list of files in the finance-tracker project folder and a brief description of each file.

- finance-tracker
    - category-bar-chart.js
    - index.html
    - category.json
    - gen.exe
    - make_csv.exe
    - month-bar-chart.js
    - pie-chart.js
    - style.css

category-bar-chart.js
- used to create a bar chart, visualizing yearly spending per category.

category.json
- contains a list of keywords and categories related to them. The keywords listed in this file are based on my own transaction history. This file can be customized to compile a detailed csv file tailored to your own personal transaction history. Further details on how to edit this file are outlined in the [Category JSON](#category-json) section.

gen.exe
- an executable of gen.py for users that do not have a local Python installation. this file generates a csv file with random transactions using category.json.

index.html
- contains the visualization portion of the application.

make_csv.exe
- an executable of make_csv.py for users that do not have a local Python installation.

month-bar-chart.js
- used to create bar chart visualizing yearly spending per month.

pie-chart.js
- used to create pie and line chart visualization of yearly spending per category.

### Python Scripts
The following is a list of Python scripts used in the project and a brief description of each file.
- category.py
- gen.py
- make_csv.py
- progressbar.py
- read_credit_pdf.py
- read_debit_pdf.py
- rename_file.py
- stats.py
- table.py

category.py
- returns a category based on the transaction description and keywrods in the category.json file.

gen.py
- generates an example all-transactions.csv with 720 entries.
 
make_csv.py 
- creates four files all-transactions.csv, data.js, data.json, and table.js. all-transactions.csv contains a list of all transactions parsed from all e statements files within the current directory and its subdirectories. data.js contains JavaScript variables used in the data visualization. data.json contains spending data based on different categories specified in category.json and spending data based on different months. table.js contains a variable a string represents of all-transactions.csv as a html table.
 
progressbar.py
- a command line interface progress bar used to visualize the progress of the application's execution.
 
read_credit_pdf.py
- used to parse rbc credit e-statements. Used to extract the transaction date, posting date, transaction id, business details, and the amount of the transaction
 
read_debit_pdf.py
- used to parse rbc debit e-statements. Used to extract the transaction date, posting date, transaction id, business details, and the amount of the transaction
 
rename.py
- used to rename e statements files that were downloaded from RBC, in order to use string parsing techniques to extract the year and
start and end month of a transaction.

read_pdf.py
- contains helper functions used by read_credit_pdf.py and read_debit_pdf.py.
 
stats.py
- used to get yearly spending data based on category and month.

table.py
- creates table.js which contains a declaration of a table variable representing a html table as a string used in index.html.

# Example
To try a live demo of the application click the following link . To download a local copy of the demo download the git repo and open the index.html file in the finance-tracker folder. Instructions in the [Getting Started](#getting-started) section also outline how to use the project.

# Implementation
The following sections outline the implementation of the project. Listing different libraries and modules and describing how they were used in the application.

## Extracting Data
The raw contents of the e statements were extracted using the **parser** method from the **[tika](https://github.com/chrismattmann/tika-python)** Python module. Further string parsing techniques from Python's standard library and Python's regular expression module **[re](https://docs.python.org/3/library/re.html)** were used to extract the account id, number, date, description, category, and amount of each transaction.

### Python Libraries
- tika: https://github.com/chrismattmann/tika-python
- re: https://docs.python.org/3/library/re.html
 
## Visualizing Data
The visualization portion of this project was implemented using echarts.js a free open source JavaScript data visualization library and bootstrap 4 for styling the html table.

### JavaScript Library
- echarts.js: https://echarts.apache.org/en/index.html
### CSS Library
- bootstrap 4: https://getbootstrap.com/docs/4.0/getting-started/introduction/
 
# Getting Started
To get started navigate to a desired folder where the application will be downloaded. Next open command prompt in the current working directory / folder. This can be done by entering 'cmd' in file explorer's address bar. After completeing the previous step a cmd window should be open with the path of the folder. Next type the following command to download the git repo:

    git clone https://github.com/nielsontrung/financial_visualizer.git
  
The required files for this application are all in the finance-tracker folder all the other files may be deleted after downloading the git repository. Next, follow the rest of the steps outlined in the following sections.
 
- [E Statements](#e-statements)
- [Category JSON](#category-json)
    - [Categories](#categories)
    - [Customization](#customization)
- [CSV](#csv)
- [Execution](#execution)
- [Visualization](#visualization)
 
 
## E Statements
In order to use this application you will need copies of your RBC e statements. 

To download your RBC e statements follow the instructions outlined in the link below:
 
https://help.sportsinteraction.com/hc/en-us/articles/360001774447-RBC-Bank-Statement-Instructions

After downloading all of your e statements put them inside the finance-tracker folder you downloaded in the previous step. The application will only work if there are e statements or a csv file called "all-transactions.csv" in the project folder. The next section outlines how to the applications categorizes transactions and how you can customize categories to generate a csv file personalized to your transactions history.
 
## Category json
This file contains information used to assign a category to a transaction based on keywords stored in it. The following section includes a list different categories in category.json. The categories stored in category.json are arbritrary and primarily based off of categories from RBC's MyFinanceTracker application. The categories in category.json can be changed based on your own transaction history. Keywords and categories can be added or removed based on your own transaction history. Examples at the end of this section will show you how to add new keywords and categories or delete them.
 
## Categories
The following is a list of the categories in category.json and examples of keywords in each category. The list of keywords were collected from my own transaction history and may not appear in your own "all-transactions.csv". Steps outlined in the [Customization](#customization) section show you how to add, edit, and remove keywords and categories.
 
automotive
- transactions related to automotive purchases (ex: acura, honda,...)
 
clothing
- transactions related to clothing purchases (ex: h&m,...)
 
deposit
- transactions related to deposits
 
education
- transactions related to educational purchases (ex: university,...)
 
electronics
- transactions related to electronics purchases (ex: best buy,...)
 
entertainment
- transactions related to entertainment purchases (ex: minecraft,...)
 
e transfers
- transactions related to e-transfers
 
fee
- transactions related to fee payments
 
gas
- transactions related to gas purchases (ex: 7 eleven,...)
 
general merchandise
- transactions related to general merchandise purchases (ex: amazon,...)
 
groceries
- transactions related to grocery purchases (ex: real cdn supers,...)
 
healthcare
- transactions related to healthcare transactions (ex: dental, pharmacy,...)
 
home improvement
- transactions related to home improvement transactions (ex: rona, lowes,...)
 
loans
- transactions related to loan payments
 
mobile
- transactions related to mobile payments (ex: fido, koodo,...)
 
other
- other transactions
 
personal care
- transactions related to personal care (ex: salon, hair,...)
 
restaurants
- transactions related to restaurant purchases (ex: mcdonalds,...)
 
travel
- transactions related to travel expenses (ex: airport,...)
 
utilities
- transactions related to utility expenses (ex: enmax,...)
 
## Customization
To further customize transactions based on categories from vendors or businesses you frequent edit the category.json file by simply adding the desired keyword or category. New keywords or categories should be added based on the specificness of the the new keyword or category. More specific keywords and categories should be added above less specific keywords or categories. This ensures that the more specifc keywords and categories are checked before more general keywords and categories.
 
### Adding a new keyword to a category:
The code below is a sample of the category.json file, in this example we insert "new restaurant" in the restaurants category between "mcdonalds" and "nandos". When we run the program after making these changes to category.json file, any transaction description containing the keyword "new restaurant" will be assigned "restaurants" as its category.
 
    {
        ...
        "personal care" : [
            ...
            "salon",
            ...
        ],
        "restaurants": [
            ...
            "mcdonalds",
            "new restaurant",
            "nandos",
            ...
        ],
        ...
    }
 
### Adding a new category:
The code below is a sample of the category.json file, in this example we add a new category between the "personal care" and the "restaurants" category. In the "new category" category we also add the keyword "something". When we execute the program with these changes to category.json any transaction description that contains "something" in it will be assigned "new category" as its category.
 
    {
        "personal care" : [
            ...
            "salon",
            ...
        ],
        "new category": [
            "something"
        ],
        "restaurants": [
            ...
            "mcdonalds",
            "new restaurant",
            "nandos",
            ...
        ],
        ...
    }
    
### Deleting a keyword or category example:
To remove a key word from a category or a whole category simply delete it from category.json. In this example we remove the "new restaurant" keyword from the "restaurants" category we added in the first example. We also remove "new category" category we had added in the previous example.
 
     {
        ...
        "personal care" : [
            ...
            "salon",
            ...
        ],
        "restaurants": [
            ...
            "mcdonalds",
            "nandos",
            ...
        ],
        ...
    }
 
## CSV
In order to visualize your transaction data a csv file is required. My application parses RBC e statements that can be downloaded from your online account. Alternatively a csv file constructed with the same format as shown below should also be suitable as input for the application. The attributes in the csv are as follows: id, account, date, description, category, and amount.
 
id
- The id of the transaction used to cross reference transactions in e statements. For debit transactions RBC doesn't record a unique id, in order to compensate for this the uuid python module was used to create a unique id that is used to uniquely identify transactions in the visualization portion of the project. 
 
account number
- The account number of the transaction.
 
date
- The date of the transaction stored in universal time coordinate (utc) format (ex: YYYY-MM-DD).
 
category
- An arbitrary list of categories based on categories from RBC's finance tracker (ex; automotive, clothing, electronics, entertainment,...).
 
amount
- The amount of the transaction, all transactions recorded for credit accounts are negative. Payments to credit accounts are handled when debit e-statements are parsed. For a debit transaction a negative amount denotes a withdrawal, a positive amount denotes a deposit. Disclaimer due to the file format and structure of RBCs debit e statements there are some inaccuracies in values recorded for some debit transactions.
 
### example.csv
 
|id            |account|date             | description         | category           | amount |
|--------------|-------|---------------- |:-------------------:|:------------------:| ------:|
|0123456123456 |0123456|2016-01-22       | amazon              | general merchandise|  00.00 |
|1111111       |1111111|2016-01-22       | superstore          | groceries          |  12.00 |
|9876543       |9876543|2016-01-22       | mcdonalds           | restaurant         |   1.00 |
 
After collecting your e statements, follow the steps in the [Execution](#execution) section below on how to run the program.
 
## Execution
Make sure you have followed the instructions in the previous sections before executing the program.

1. Double-click the make_csv.exe file.
2. After double-clicking the executable the program will ask you to choose one of three options below.

        Choose one of the following options below:
            (0) exit
            (1) recursively process all e statements
            (2) process all-transactions.csv

3. If you want to exit the program choose option (0) by entering 0 in the command line.
4. If you have your e statements choose option (1) by entering 1 in the command line and continue to step 6.
5. If you have your own csv file choose option (2) by entering 2 in the command line and continue to step 9.

#### Program During Execution
    Progress: |████████------------------------------------------| 17.7% Complete
    
6. The program recursively searches the directory where it is saved and looks for RBC e statements. 
7. The program converts the filenames of all the e-statements found from the previous step. Renamed as the following (ex: 12345XXXXXX12345-2014-Mar12-2014-Apr12 to 12345XXXXXX12345-2014-03-12-2014-04-12). This step is required for better organization and to extract the transaction period of the e-statement.
8. The program parses every e statement in the project folder and writes every transaction to the "all-transactions.csv" file.
9. The program creates the following files data.json, data.js, and table.js. data.json contains data about yearly spending across different categories and months. data.js contains data from data.json stored as JavaScript variables which will be used by category-bar-chart.js, pie-chart.js, and moth-bar-chart.js. table.js contains a JavaScript variable named "table" this variable is a string representing all-transactions.csv as a html table dom element.
10. The program finishes execution and closes the following files all-transactions.csv, data.js, data.json, and table.js.
#### Program Finishing Execution
    Progress: |██████████████████████████████████████████████████| 100.0% Complete

## Visualization
After compiling the csv file from the previous section, you should now be able to open the index.html file. Here, you will be able to see a visualization showing your yearly spending across different categories and transaction periods. You can also view your transaction history on the left of the page in the html table. Check out a live demo of the application by clicking the following link below: 
