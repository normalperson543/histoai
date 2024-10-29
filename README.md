oscc-sf24 is a website that allows scientists to easily analyze and store data about histopathological images of oral squamous cell carcinoma utilizing TensorFlow ML.

## DISCLAIMER
oscc-sf24 is **NOT** designed to diagnose oral cancers. It is only meant as an assistance to qualified scientists that already have experience in the field, and should only be used with a primary and accurate source of diagnosis. We assume **NO** responsibility for anything that you do with this. While machine learning has gone a long way, it is NOT ENOUGH to accurately detect oral cancers and it is **DANGEROUS** to use this website as your only way of diagnosing oral cancers. **DO NOT USE oscc-sf24 TO DIAGNOSE ORAL CANCERS!**

This website is meant for _qualified scientists_ that already have prior experience and sufficient knowledge and certifications in treating and diagnosing oral cancers.

This software comes with **ABSOLUTELY NO WARRANTY!!!**

## Installation
To test oscc-sf24, run ```pnpm install``` to install dependencies.

Then, connect a Prisma compatible database to use oscc-sf24. The recommended database is SQLite. 

To connect Prisma to a new local SQLite database, run the following:
```
pnpm dlx prisma db push
```

Run ```pnpm dev``` to run the development server locally.

Then, open https://localhost:3000 in your browser.

## Deployment
This can be deployed locally on premises, for security purposes.

TBD

## Technologies
* Next.js
* TensorFlow.js
* Tailwind CSS
* PostgreSQL through Neon

## Datasets
* add some

## License
Unless otherwise noted, this software is licensed under the **insert license legal jargon**.

## See Also
TBD
