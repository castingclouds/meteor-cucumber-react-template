var Dashboard = React.createClass({
    render () {
        return (
            <h1>Dashboard</h1>
        );
    }
});

Template.dashboard.helpers({
    Dashboard() {
        return Dashboard;
    }
});
