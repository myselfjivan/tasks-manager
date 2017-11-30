(function() {
    'use strict';

    angular
        .module('tasks')
        .controller('PublicTasksListController', PublicTasksListController);

    PublicTasksListController.$inject = ['PublicTasksService'];

    function PublicTasksListController(PublicTasksService) {
        var vm = this;

        vm.tasks = PublicTasksService.query();
    }
}());