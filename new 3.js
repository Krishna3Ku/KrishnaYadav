<form>
	<label for="predicate">selected predicate:</label>
	<select class="form-control" id="predicate" ng-model="selectedPredicate" ng-options="predicate for predicate in predicates"></select>
</form>
<table st-table="rowCollection" class="table table-striped">
	<thead>
	<tr>
		<th st-sort="firstName">first name</th>
		<th st-sort="lastName">last name</th>
		<th st-sort="birthDate">birth date</th>
		<th st-sort="balance">balance</th>
		<th>email</th>
	</tr>
	<tr>
		<th>
			<input st-search="firstName" placeholder="search for firstname" class="input-sm form-control" type="search"/>
		</th>
		<th colspan="3">
			<input st-search placeholder="global search" class="input-sm form-control" type="search"/>
		</th>
		<th>
			<input st-search="{{selectedPredicate}}" placeholder="bound predicate" class="input-sm form-control" type="search"/>
		</th>
	</tr>
	</thead>
	<tbody>
	<tr ng-repeat="row in rowCollection">
		<td>{{row.firstName | uppercase}}</td>
		<td>{{row.lastName}}</td>
		<td>{{row.birthDate | date}}</td>
		<td>{{row.balance | currency}}</td>
		<td><a ng-href="mailto:{{row.email}}">email</a></td>
	</tr>
	</tbody>
</table>
 app.controller('filterCtrl', ['$scope', '$filter', function (scope, filter) {
    scope.rowCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];

    scope.predicates = ['firstName', 'lastName', 'birthDate', 'balance', 'email'];
    scope.selectedPredicate = scope.predicates[0];
}]);