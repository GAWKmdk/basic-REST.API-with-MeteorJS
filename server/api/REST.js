Router.route('/api', {

where: 'server'

})
.get(function() {
    
    //write headers ...
    writeHeaders(this);
    
    //send our response ... view in postman under body/raw
    this.response.end('GET not supported\n');
    
})
.post(function() {
    
    writeHeaders(this);
    var user = this.request.body.owner;
    if(!user) {
        this.response.end('No user specified...\n');
        return;
    }
    var credits = Credits.find({
        owner: user
    }).fetch();
    this.response.end(JSON.stringify(credits));
})

.put(function() {
    writeHeaders(this);
    var upCredit = this.request.body.update;
    if(!upCredit) {
        this.response.end('Nothing to Update');
            }
    var update = Credits.upsert({
        _id: upCredit.id
    }, {
        $set: upCredit.changes
        });
    this.response.end('Credit accepted ! ... \n');
});



function writeHeaders(self) {

    self.response.statusCode = 200;
    self.response.setHeader('Content-type', 'application/json');
    self.response.setHeader('Access-Control-Allow-Origin', '*');
    self.response.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');

}