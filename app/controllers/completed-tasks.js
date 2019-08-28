import Controller from '@ember/controller';

export default Controller.extend({
    tasks: [
        {name: "Client Meeting", date: "2019-05-08T07:22:13", completed: false, dscp: "description"},
        {name: "Desing App Interface", date: "2019-05-15T07:22:13", completed: false, dscp: "description"},
        {name: "Learn Node.Js", date: "2019-09-03T07:22:13", completed: false, dscp: "description"},
        {name: "Bring the puppy out XD", date: "2019-07-24T07:22:13", completed: false, dscp: "description"}
    ]
});
