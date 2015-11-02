var Home = React.createClass({
    render () {
        return (
            <h1>{Meta.options.suffix}</h1>
        );
    }
});

Template.home.helpers({
    Home() {
        return Home;
    }
});
