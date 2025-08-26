📦 Serverless Drive – Secure File Management

A modern storage and file sharing platform inspired by Google Drive/Dropbox.
This app solves the problem of unsafe file sharing and poor collaboration by allowing users to:

log in securely with passwordless OTP authentication,

upload, preview, and manage files,

share documents with others,

and track their usage through a clean dashboard.

This project demonstrates my ability to build production-ready full-stack applications with a modern UI, secure authentication, scalable backend, and cloud storage.

⚙️ Tech Stack

React 19

Next.js 15

TailwindCSS + ShadCN UI

TypeScript

Appwrite (Auth, Database, Storage)

🔋 Features

🔑 Secure Authentication – Passwordless login with Appwrite

📂 File Uploads – Upload documents, images, videos, and audio

👀 Preview & Manage – Rename, delete, or view files instantly

⬇️ Downloads – Retrieve files at any time

🤝 File Sharing – Collaborate by sharing links securely

📊 Dashboard – Track storage usage, recent uploads, and file types

🔍 Global Search & Sorting – Quickly find and organize files

📱 Responsive Design – Clean, modern UI across devices

🚀 Getting Started

1. Clone the repository

git clone https://github.com/Ericdt17/Serverless-Drive-Secure-File-Management-App.git
cd serverless-drive


2. Install dependencies

npm install


3. Configure environment variables
Create .env.local with your Appwrite credentials:

NEXT_PUBLIC_APPWRITE_ENDPOINT="https://cloud.appwrite.io/v1"
NEXT_PUBLIC_APPWRITE_PROJECT="your-project-id"
NEXT_PUBLIC_APPWRITE_DATABASE="your-database-id"
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION="your-users-collection"
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION="your-files-collection"
NEXT_PUBLIC_APPWRITE_BUCKET="your-bucket-id"
NEXT_APPWRITE_KEY="your-secret-key"


4. Run locally

npm run dev


Visit http://localhost:3000
.

🎯 Why this project matters

This project was built to practice secure file management and demonstrate:

Authentication flows (OTP, sessions)

File handling with cloud storage

Real-time search and dashboards

Responsive, modern frontend design

It showcases the skills companies need for full-stack development: React, Next.js, TypeScript, authentication, cloud APIs, and clean UI/UX.