#!/bin/bash

# populates the idm repo with some data for the delegated admin default_schema_optimization
# setup vars
export idm_user="openidm-admin"
export idm_password="openidm-admin"
export idm_url="https://localhost:8443/openidm"
export curl_cmd="curl -k --header \"content-type: application/json\" --header \"X-OpenIDM-Username: $idm_user\" --header \"X-OpenIDM-Password: $idm_password\" "


# Create 2 organisations
export org1="--data '{\"name\":\"Organisation1\"}' "
export org2="--data '{\"name\":\"Organisation2\"}' "
export org1_create="$idm_url/managed/organisation/org1 "
export org2_create="$idm_url/managed/organisation/org2 "
eval $curl_cmd "--request PUT" $org1 $org1_create
eval $curl_cmd "--request PUT" $org2 $org2_create

#create 2 org managers, ideally with links to the created organisations
export user_create="$idm_url/managed/user?_action=create "
export orgmgra="--data '{\"userName\": \"orgmgra\", \"givenName\": \"OrgMgr\", \"sn\": \"A\", \"mail\": \"orgmgra@example.com\", \"password\":\"Password1\", \"manageOrgs\":[{\"_ref\":\"managed/organisation/org1\"}]}' "
export orgmgrb="--data '{\"userName\": \"orgmgrb\", \"givenName\": \"OrgMgr\", \"sn\": \"B\", \"mail\": \"orgmgrb@example.com\", \"password\":\"Password1\", \"manageOrgs\":[{\"_ref\":\"managed/organisation/org2\"}]}' "
eval $curl_cmd $orgmgra $user_create
eval $curl_cmd $orgmgrb $user_create
# create 2 standard users that can be added to the orgaisations by the orgmgrs
export user1="--data '{\"userName\": \"user1\", \"givenName\": \"User\", \"sn\": \"One\", \"mail\": \"user1@example.com\", \"password\":\"Password1\"}' "
export user2="--data '{\"userName\": \"user2\", \"givenName\": \"User\", \"sn\": \"Two\", \"mail\": \"user2@example.com\", \"password\":\"Password1\"}' "
eval $curl_cmd $user1 $user_create
eval $curl_cmd $user2 $user_create
