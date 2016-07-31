OpenIDM v4.0.0 Delegated Admin Sample
=====================================

The files in src/resources provide a custom configuration of OpenIDM v4 to demonstrate how
delegated admin could be delivered.

This project is derived from https://github.com/jakefeasel/openidm-delegatedadmin
which provides a framework for delivering a custom OpenIDM project controlled by source control systems
Jake's project provides an automated build of VM in virtualbox, download and install of OpenIDM4.
It also runs bootstrap scripts, and copies the specific OpenIDM config (in src/resource) to the relevant
configuration directories of the built environment.

The Delegated Admin sample uses this capability so that simply running:
  vagrant up
will build and deploy a full environment.

To install
==========
Ensure VirtualBox is installed
Ensure Vagrant is installed
Download this project to a local directory
From download directory run:
  vagrant up

When build has finished (which could take some time to download the base image, supporting tools,
updates, OpenIDM, postgres) you can access, from your local browser:
  https://localhost:18443/admin for the OpenIDM administration UI, and
  https://localhost:18443 for the OpenIDM end user UI

To use
======
The sample configures an 'organisation' managed object.  Two organisations are populated into the repo.
The sample configures the managed user object to allow users to be related to organisations as either:
- Members, or
- Organisation managers
The sample creates two Organisation Managers - orgmgra and orgmgrb -
  related to Organisation 1 and Organisation2 respectively.

Log on as orgmgra (Password1) and see that they can only 'manage' Organisation1.
orgmgrb can only manage Organisation2
Managing an Organisation means being able to edit its details, including the 'Members'.
Members can be drawn from any existing Managed User.  
It is assumed that 'Organisation Managers' cannot add/remove/edit managed users -
  simply add/remove them from an organisation
