
    var myApp = angular.module("myApp", []);
    myApp.controller("CtrlWiki", function ($scope) {
    $scope.name = "Demo";
        $scope.$watch('query', function () {
            console.log("Query", $scope.query); 
        });

        $scope.showChanged = function(){
            console.log("Query", $scope.query); 
            $scope.information =  $scope.query.information;
        }

        $scope.informations = [
            {   
                id: 1,
                title:'Article long',
                target:'world',
                desc: "",
                tech:{
                    ida: false,
                    cp: false,
                    dms : false,
                    els : true,
                    pbs : false,
                    beesite : false,
                    newsletter : false, 
                    fb: true,
                    email : false,
                    shared: false
                }
            },
            {   
                id: 2,
                title:'Article short',
                target:'world',
                desc: "",
                tech:{
                    ida: false,
                    cp: false,
                    dms : false,
                    els : false,
                    pbs : false,
                    beesite : false,
                    newsletter : false, 
                    fb: true,
                    email : false,
                    shared: false
                }
            },
            // {   
            //     id: 3,
            //     title:'Newsletter',
            //     target:'GIZKam',
            //     desc: "",
            //     tech:{
            //         ida: false,
            //         cp: false,
            //         dms : false,
            //         els : false,
            //         pbs : false,
            //         beesite : false,
            //         newsletter : true, 
            //         fb: false,
            //         email : false,
            //         shared: false
            //     }
            // },
            {   
                id: 4,
                title:'Information Générale (GIZ Kamerun)',
                target:'GIZKam',
                desc: "",
                tech:{
                    ida: true,
                    cp: true,
                    dms : false,
                    els : false,
                    pbs : false,
                    beesite : false,
                    newsletter : true, 
                    fb: false,
                    email : true,
                    shared: false
                }
            },
            {   
                id: 5,
                title:'Vacancies',
                target:'GIZKam',
                desc: "",
                tech:{
                    ida: false,
                    cp: true,
                    dms : false,
                    pbs : false,
                    els : true,
                    beesite : true,
                    newsletter : false, 
                    fb: false,
                    email : true,
                    shared: false
                }
            },
            {   
                id: 6,
                title:'Activités de projet sur le terrain',
                target:'GIZKam',
                desc: "Il s’agit d’un document de référence que l’entreprise met sur pied pour permettre à ses employé(e)s d’avoir en permanence à portée de main des informations essentielles leur permettant d’asseoir une bonne base de connaissance sur elle et l’entente qui les unit. On y retrouve par exemple les informations sur : la vision/philosophie et les missions de l’entreprise, les conditions de travail, les exigences de l’environnement de travail, celles liées aux contrats (période d’essai, salaire, avancements, congés, départs, absences…), les avantages sociaux, le développement professionnel, etc.",
                tech:{
                    ida: true,
                    cp: false,
                    dms : false,
                    els : false,
                    pbs : false,
                    beesite : false,
                    newsletter : false, 
                    fb: true,
                    email : true,
                    shared: false
                }
            },
            {   
                id: 7,
                title:'Innovations',
                target:'GIZKam',
                desc: "En interne comme à l’extérieur, elles sont un moyen de communication qui permet de rendre visible l’information dans les endroits les plus fréquentés par le groupe cible. Il faut éviter de la surcharger avec des informations abondantes. Il ne faut y faire figurer que l’essentiel qui lui permet d’atteindre l’objectif principal voulu. L’affiche doit être un teaser qui peut conduire la cible vers une personne dont les coordonnées y figurent ou vers une adresse (site internet par exemple) pour plus d’information.",
                tech:{
                    ida: true,
                    cp: false,
                    dms : false,
                    els : true,
                    pbs : false,
                    beesite : false,
                    newsletter : true, 
                    fb: true,
                    email : true,
                    shared: false
                }
            },
            {   
                id: 8,
                title:'Compte-rendu ',
                target:'GIZKam',
                desc: "Le rapport de réunion, référence quant au déroulement et productions issus lors de séance de travail.",
                tech:{
                    ida: false,
                    cp: false,
                    dms : true,
                    els : false,
                    pbs : false,
                    beesite : false,
                    newsletter : false, 
                    fb: false,
                    email : true,
                    shared: true
                }
            }

        ]

        
    });

    