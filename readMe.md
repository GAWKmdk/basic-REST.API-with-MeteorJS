#Meteor Recipe for REST API

- To be clear, METEOR uses a bidirectional DDP connection to handle realtime syncing between published data (*Revew Publish and Subscribe between Server and Client in your use of DDP Client). 

- Since the literature points out that REST is still a mature, well-defined protocol;  using REST API in a Meteor APP would fit the calling if: 

* External consumption of data is by default outside the spectrum of controls in the application itself (ie: transactioned cookies and artificial TC's).

* Transfering data in its raw/binary format is not handled well by the DDP client given its quantified mass (ie: performance i/o).

* The external tool acts by default on a spectrum which, to avoid latency and overhead, requires the creation and maintance of a websocket. 


This simple example provides a way to base .get & .pull using the iron:router package to send header signals between the client and serer. It requires http://getpostman.com/ to configure. 



#The BASICS

- Iron Router is configured to listen to http://localhost:300/api/ for all GET, POST and PUT requests.
- To listen on a particular route use a Router.route('/api'...) method call. 
*key is writeHeaders(this) and  this.response.end(' ... RESPONSE HERE ... ');