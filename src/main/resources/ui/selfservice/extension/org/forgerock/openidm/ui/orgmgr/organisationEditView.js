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
 * Copyright 2011-2016 ForgeRock AS.
 */

/*global define */

define("org/forgerock/openidm/ui/orgmgr/organisationEditView", [
    "jquery",
    "lodash",
    "handlebars",
    "org/forgerock/commons/ui/common/main/AbstractView",
    "org/forgerock/openidm/ui/common/resource/GenericEditResourceView"
],
function ($, _, Handlebars,
    AbstractView,
    GenericEditResourceView
  ) {
    var organisationEditView = function () {
        return AbstractView.apply(this, arguments);
    };

    organisationEditView.prototype = Object.create(GenericEditResourceView);

    organisationEditView.prototype.render = function (args, callback) {
        GenericEditResourceView.render.call(this, args, _.bind(function () {
            $('#backBtn').hide();
            $('#tabHeader_resource-orgManagers').hide();
            $('#deleteBtn').hide();
            setInterval(function () {
                $('.tab-pane').find('.resourceEditLink').each(function () {
                    var txt = $(this).text();
                    $(this).parent().find('.link2Text').remove();
                    $(this).after("<span class='link2Text'>" + txt + "</span>");
                    $(this).hide();
                    $(this).closest("tr").unbind('click');
                });
                $('.tab-pane').find('.relationshipGraphBody').find('a').each(function () {
                    var txt = $(this).text();
                    $(this).removeAttr('href');
                }); 
            }, 500);
            if (callback) {
                callback();
            }
        }, this));
    };

    return new organisationEditView();
});
