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

/*global define, document */

define("org/forgerock/openidm/ui/orgmgr/ORGManagerView", [
    "jquery",
    "underscore",
    "handlebars",
    "org/forgerock/commons/ui/common/main/AbstractView",
    "org/forgerock/commons/ui/common/main/EventManager",
    "org/forgerock/commons/ui/common/util/Constants",
    "org/forgerock/commons/ui/common/main/Configuration",
    "org/forgerock/openidm/ui/common/delegates/ResourceDelegate",
    "org/forgerock/openidm/ui/common/resource/RelationshipArrayView"
], function($, _,
        Handlebars,
        AbstractView,
        EventManager,
        Constants,
        Configuration,
        ResourceDelegate,
        RelationshipArrayView
    ) {

    var ORGManagerView = AbstractView.extend({
        template: "templates/orgmgr/ORGManagerTemplate.html",





        render: function(args, callback) {
            // get the ORG data out...
            this.data.user = Configuration.loggedUser.toJSON();

            ResourceDelegate.getSchema(["managed", "user"]).then(_.bind(function (schema) {

                var prop = schema.properties.manageOrgs;

                prop.parentObjectId =  this.data.user._id;
                prop.relationshipUrl = "managed/user/" + this.data.user._id + "/manageOrgs";
                prop.typeRelationship = true;
                prop.parentDisplayText = "User";
                prop.propName = "manageOrgs";

                this.parentRender(function() {
                    var ORGView = new RelationshipArrayView();

                    ORGView.render({ element: "#ORG_list", prop: prop, schema: schema }, function () {
                        $('.add-relationship-btn').hide();
                        $('.remove-relationships-btn').hide();
                          if (callback) {
                              callback();
                          }
                    });

                });

            }, this))
        }

      });
      return new ORGManagerView();
});
