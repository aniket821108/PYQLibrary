


#PYQ Library

A Django-based web application designed for NIT Mizoram students to easily **search, view, and upload Previous Year Question (PYQ) papers** organized by **department** and **academic year**.
It eliminates the need to manually request papers from seniors, creating a centralized and searchable repository.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 1. Project Overview

The **PYQ Library** provides a unified platform for accessing and managing PYQ papers.
Students can quickly find question papers, while authenticated users (students/admins) can contribute by uploading new papers.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

2. Project Goals

* 🗂️ **Centralized Access:** Store and organize PYQ papers by department and academic year.
* 🔍 **Efficient Search:** Enable keyword, department, and year-based search for quick retrieval.
* ⬆️ **User Contributions:** Allow authenticated users to upload and manage new papers.
* 🤖 **Future Expansion:** Incorporate AI-driven paper categorization and recommendations.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

3. Core Features

#Home Page

* Main entry point with navigation bar and search options.
* Filters for department, academic year, and keyword.
* Displays search results in list/grid format.
* Includes login/logout options for different user roles.

#Search Functionality

* Real-time filtering of papers based on input criteria.
* Displays relevant details such as subject, year, and uploader.

#Upload Page

* Accessible to logged-in users.
* Allows selection of subject, year, and input of metadata (e.g., coordinator name).
* File upload interface with validation and upload controls.

#Authentication

* Secure login/logout for students and admins.
* Role-based permissions for uploading or managing content.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

4. Application Structure

Main Modules:

Home → Search and view PYQs
Upload → Add new PYQs (authenticated users only)
Auth → Login, registration, and profile management

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

5. Architecture Diagram


Home Page
 ├── Search Bar (keyword, department, year)
 ├── Navigation: Home | Upload | Profile | Logout
 └── Results Display (List/Grid)

Upload Page
 ├── Subject Selector
 ├── Year Selector
 ├── Coordinator Name Input
 ├── File Upload Section
 └── Buttons: Upload | Cancel
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



6. Future Scope

* 🤖 **AI Integration:** Smart recommendations based on subject and popularity.
* 📊 **Analytics Dashboard:** Track most accessed papers and trending subjects.
* ⚙️ **Advanced Filters:** Enable filtering by exam type, semester, or faculty.
* 🧩 **Mobile App Support:** Companion Android/iOS version for easier access.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

7. Setup Instructions

1. Clone this repository  
   
   git clone https://github.com/yourusername/pyq-library.git
   cd pyq-library

2. Install dependencies

   pip install -r requirements.txt
   
3. Run the development server

   python manage.py runserver


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Open to contributions from the NIT Mizoram community. Please follow code standards and provide documentation for new features.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 License

MIT License (or other license as relevant)
