# Asayake Taiko Website
This repository contains the source code and build files required to host the website www.asayaketaiko.com. Currently it is statically hosted using github pages with the domain name obtained from porkbuns. 

## Development
To develop you simply need to install the dependencies with:
```
npm install
```
Then, you can run a development preview with
```
npm run dev
```

## Deployment
If you are done developing, you can generate build files with 
```
npm run build
```
After that, if you take the files inside the build file and move them into the branch production, github pages will automatically build and deploy the website from there. You may have to set domain name again.

To modify the domain name, you need to login to [porkbuns.com](porkbuns.com) using the account AsayakeTaiko. From there, you should be able to renew, reconfigure the DNS records, and update the domain as need be.

## About
Based off https://github.com/rolemadelen/asayake, which was intended to update the old look of the website with a modern design. This repository simply takes the code and prepares it to be deployed on the official Asayake Taiko Website. Jii made most of the designs, I simply added small changes to customize it for the group.

Key Changes
- Used adapter-static so the site can be statically generated for hosting
- Added keyboard accessibility features
- Updated website photos with recent Asayake photos

## License
Copyright © 2023, Jii Eu. Released under the MIT License.