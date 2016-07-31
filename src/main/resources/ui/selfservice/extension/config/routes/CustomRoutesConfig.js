/**
 * The contents of this file are subject to the terms of the Common Development and
 * Distribution License (the License). You may not use this file except in compliance with the
 * License.
 *
 * You can obtain a copy of the License at legal/CDDLv1.0.txt. See the License for the
 * specific language governing permission and limitations under the License.
 *
 * When distributing Covered Software, include this CDDL Header Notice in each file and include
 * the License file at legal/CDDLv1.0.txt. If applicable, add the following below the CDDL
 * Header, with the fields enclosed by brackets [] replaced by your own identifying
 * information: "Portions copyright [year] [name of copyright owner]".
 *
 * Copyright 2011-2015 ForgeRock AS.
 */

/*global define*/
/*jslint regexp:false */

define("config/routes/CustomRoutesConfig", [
], function() {
    //definitions for views here are generic
    //the actual path to each view is defined in config/AppConfiguration.js
    //view files are mapped aliases registered within requirejs
    var obj = {
        "manageORG": {
            view: "org/forgerock/openidm/ui/orgmgr/organisationManagerView",
            url: /orgmgr(\/[^\&]*)(\&.+)?/,
            pattern: "orgmgr??",
            defaults: ["/",""]
        },
        "adminListManagedObjectView" : {
            view: "org/forgerock/openidm/ui/common/resource/ListResourceView",
            role: "ui-user",
            url: /^resource\/(managed)\/(.+)\/list\/$/,
            pattern: "resource/?/?/list/"
        },
        "adminEditManagedObjectView" : {
            view: "org/forgerock/openidm/ui/common/resource/EditResourceView",
            role: "ui-user",
            url: /^resource\/(managed)\/(.+)\/edit\/(.+)$/,
            pattern: "resource/?/?/edit/?",
            forceUpdate: true
        }
    };

    return obj;
});
