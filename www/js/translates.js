/**
 * Created by ManTran on 6/2/2015.
 */
define(['app'], function (SALA) {
    'use strict';

    SALA.config(function ($translateProvider) {

        $translateProvider.useSanitizeValueStrategy(null);
        $translateProvider.translations('en', {
            'Learning Buddha': "Learning Buddha",
            Login: "Login",
            Username: "Username",
            Password: "Password"
        });
        $translateProvider.translations('vi', {

        });
        $translateProvider.preferredLanguage("vi");
        $translateProvider.fallbackLanguage("en");

    });

});