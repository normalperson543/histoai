histoAI is a website that allows scientists to easily analyze and store data about histopathological images of oral squamous cell carcinoma utilizing TensorFlow ML.

## DISCLAIMER
histoAI is **NOT** designed to diagnose oral cancers. It is only meant as an assistance to qualified scientists that already have experience in the field, and should only be used with a primary and accurate source of diagnosis. We assume **NO** responsibility for anything that you do with this. While machine learning has gone a long way, it is NOT ENOUGH to accurately detect oral cancers and it is **DANGEROUS** to use this website as your only way of diagnosing oral cancers. **DO NOT USE histoAI TO DIAGNOSE ORAL CANCERS!**

This website is meant for _qualified scientists_ that already have prior experience and sufficient knowledge and certifications in treating and diagnosing oral cancers.

This software comes with **ABSOLUTELY NO WARRANTY!!!**

## Installation
To start a development server, run the following commands, which should automate 99% of the setup:
```
git clone --recurse-submodules https://github.com/normalperson543/oscc-sf24.git
cd oscc-sf24
npm i
npm run setup
npm run dev
```
Open https://localhost:3000 in your browser to see the application and go through initial setup.

## Deployment
This can be deployed locally on premises, for security purposes.

Run the following commands:
```
git clone --recurse-submodules https://github.com/normalperson543/oscc-sf24.git
cd oscc-sf24
npm i
```
Then, open the histoai.config.ts file in your text editor, and modify the configuration to customize histoAI.

Finally, run the following to build and start the production server:
```
npm run build
npm start
```
If you are deploying locally, you may see a server error message from Auth.js regarding untrusted hosts. In that case, follow the instructions [here](https://authjs.dev/reference/core/errors#untrustedhost).

Open https://localhost:3000 to see the production build.

## Configuration
You may choose to configure histoAI, including customizing the organization name. To do this, open the `histoai.config.ts` file and modify the contents.

## Technologies
* Next.js
* TensorFlow.js
* Tailwind CSS
* SQLite (through node-sqlite3 and Prisma)
* Prisma
* Auth.js

## License
Unless otherwise noted, this software is licensed under the **insert license legal jargon**.
