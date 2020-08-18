/**
 * Future update is the teams array include objects that state player start-date, startWeight, and weightLoss
 */

const Users = [
    {
        email:"jcsmileyjr@gmail.com",
        name:"JC Smiley",
        teams:[
            'MGC',
            'Smiley Family',
        ],
        startWeight: 200,
        weightLoss: 2.4,
        winner: false,
        lastUpdate: '8/15/2020'
    },
    {
        email:"jsmiley@bellsouth.net",
        name:"JC Smiley Sr.",
        teams:[
            'Smiley Family'
        ],
        startWeight: 160,
        weightLoss: 3.6,
        winner: false,
        lastUpdate: '8/10/2020'
    },
    {
        email:"bHadley.mgc.state.ms.us",
        name:"Beckett Hadley",
        teams:[
            'MGC'
        ],
        startWeight: 160,
        weightLoss: 3.6,
        winner: false,
        lastUpdate: '8/10/2020'
    }
    ];
    
    /**Default object
     * 
    {
        email:"",
        name:"",
        teams:[
            ''
        ],
        startWeight: ,
        weightLoss: ,
        winner: false,
        lastUpdate: '8/15/2020'
    }
     */
    
    export default Users;