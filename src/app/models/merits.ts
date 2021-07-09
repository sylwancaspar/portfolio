export class Merits{

    swedishCV()
    {
        return this.workExperienceSv;
    }

    englishCV()
    {
        return this.workExperienceEng
    }

    svProgramingTools()
    {
        return this.frameworkSv;
    }

    engProgramingTools()
    {
        return this.frameworkEng
    }

    aboutMeSv()
    {
        return this.aboutMeTextSv;
    }

    aboutMeEng()
    {
        return this.aboutMeTextEng;
    }

    getSpokenLanguageEng(){
      return this.spokenLanguageEng
    }

    getSpokenLanguageSv(){
      return this.spokenLanguageSv
    }

    private spokenLanguageSv:{lang:string, level:string}[] = [
      {
        lang: 'Svenska',  level:'modersmål'
      },
      {
        lang:'Engelska', level:'flytande'
      },
      {
        lang: 'Franska', level: 'grundläggande'
      }
      ,
      {
        lang: 'Arabiska', level: 'grundläggande'
      }
    ]

    private spokenLanguageEng:{lang:string, level:string}[] = [
      {
        lang: 'Swedish',  level:'Mothertongue'
      },
      {
        lang:'English', level:'fluent'
      },
      {
        lang: 'French', level: 'spoken'
      }
      ,
      {
        lang: 'Arabic', level: 'spoken'
      }
    ]

    private aboutMeTextSv:string =  "Jag är fullstackutvecklare och programmerar framförallt i Java. \
                            Jag kan även JavaScript, R, Python, HTML, CSS och många fler. Detta\
                            gör att jag kan lätt att anpassa mig till projektets behov. Utöver" + 
                            "Utöver det brinner jag för matematik, statistik och har ett stort intresse för maskininlärning."; 
    
    private aboutMeTextEng:string = "My passion for programming started long time ago as a hobby that I enjoyed developing over time to become through\
                            more than 1000 hours of YouTube tutorials, variety of courses on both BA and Master levels, mixing it with\
                            mathematics and machine learning, as well as developing my own projects. All for the sake of fun! Now that I am\
                            hooked and passionate about this world, I dare to make a career shift, from being an international artist to becoming a\
                            passionate programmer."    





    private frameworkEng:{
        sprak:string,
        ramverk:string[]
  }[] = [
    {
        sprak: 'Java',
        ramverk: ['Springboot', 'Hibernate/JPA', 'Thymeleaf', 'Java EE', 'JavaFX', 'Selenium (e2e)', 'Junit 5 (Unit testing)', "Mockito  (Unit testing)"]      
      },
      {
       sprak: 'Python',
       ramverk:['Tkinter','Numpy','Panda', 'Anaconda']
      },
      {
        sprak:'R',
        ramverk:['R-studio']
      },
      {
        sprak:'TypeScript',
        ramverk:['Leaflet', 'Chart.js']
      },
      {
        sprak:'Frontend',
        ramverk:['HTML5', 'CSS', 'SCSS/SASS', 'Web Content Accessibility Guidelines (WCAG)', 'Bootstrap']
      }
      ,
      {
        sprak:'Frontend frameworks',
        ramverk:['Angular 2+', 'Rxjs', 'Protractor (e2e)', 'Jasmine/Karma (Unit testing)', 'Vue', 'VueX']
  
      }
      ,
      {
        sprak:'Development tools',
        ramverk:['Git','Docker']
      }
    ]

    private frameworkSv:{
        sprak:string,
        ramverk:string[]
  }[] = 
  [
    {
      sprak: 'Java',
      ramverk: ['Springboot', 'Hibernate/JPA', 'Thymeleaf', 'Java EE', 'JavaFX', 'Selenium (e2e)', 'Junit 5 (Unit testing)', "Mockito  (Unit testing)"]      
    },
    {
     sprak: 'Python',
     ramverk:['Tkinter','Numpy','Panda', 'Anaconda']
    },
    {
      sprak:'R',
      ramverk:['R-studio']
    },
    {
      sprak:'TypeScript',
      ramverk:['Leaflet', 'Chart.js']
    },
    {
      sprak:'Frontend bas',
      ramverk:['HTML5', 'CSS', 'SCSS/SASS', 'AJAX', 'Web Content Accessibility Guidelines (WCAG)', 'Bootstrap']
    }
    ,
    {
      sprak:'Frontend ramverk',
      ramverk:['Angular 2+', 'Rxjs', 'Protractor (e2e)', 'Jasmine/Karma (Unit testing)', 'Vue', 'VueX']

    }
    ,
    {
      sprak:'Development tools',
      ramverk:['Git','Docker']
    }
  ]

  workExperienceEng:{heading:string,
    type:string,
    place?:string,
    from:Date,
    to:Date,
    description:string}[]=
     [
       {
            heading:"Swedish Public Employment Service",
            place: 'Solna',
            type:'work',
            from: new Date("2020-01-01"),
            to: null, 
            description: "Developer, focus on frontend"
       }
       ,
       {
            heading:"Bizzcoo consulting business",
            place: 'Stockholm',
            type:'work',
            from: new Date("2020-04-01"),
            to: new Date("2020-08-01"), 
            description: "Full stack - Internship"
        }
        ,
        {
            heading:"Swedish Public Employment Service",
            place: 'Stockholm',
            type:'work',
            from: new Date("2017-01-17"),
            to: new Date("2019-08-01"), 
            description: "Consulting and matching companies and job-seekers, networking and coordinating career events."
        }
        ,
        {
            heading:"Kista Library, Librarian",
            place: 'Stockholm',
            type:'work',
            from: new Date("2015-04-01"),
            to: new Date("2016-12-01"), 
            description: "Plan and develop the Library’s activities with focus on its’ digital resources, digital pedagogue, content producer, responsible for data collection and statistics."
        }
        ,
        {
            heading:"The Swedish Cultural School (Kulturskolan) Pedagog",
            place: 'Stockholm',
            type:'work',
            from: new Date("2013-06-01"),
            to: new Date("2015-01-01"), 
            description: "Lead the circus department of the school, including planning, implementation, evaluation and reporting."
        }
        ,
        {
            heading:"The Palestinian Circus School",
            place: 'Stockholm',
            type:'work',
            from: new Date("2012-01-01"),
            to: new Date("2013-06-01"), 
            description: "Lead the circus department of the school, including planning, implementation, evaluation and reporting."
        }
        ,
        {
            heading:"The BOX entertainment",
            place: 'Europe',
            type:'work',
            from: new Date("2012-01-01"),
            to: new Date("2013-06-01"), 
            description: "Own company as an artist & producer. Produce and promote own productions internationally."
        }
        ,
        {
            heading:"Programming in Java, IT vocational university (IT-högskolan)",
            place: 'Stockholm',
            type:'education',
            from: new Date("2019-08-01"),
            to: new Date("2021-06-01"), 
            description: "Full stack development – Java"
        }
        ,
        {
            heading:"BA in Economics, Stockholm’s University",
            place: 'Stockholm',
            type:'education',
            from: new Date("2010-08-01"),
            to: new Date("2015-06-01"), 
            description: "Includes 60 hp in mathematics & statistics: Linear Algebra, single variable calculus, multivariable calculus, regression analysis, multivariate methods."
        }
        ,
        {
            heading:"BA in performing Arts",
            place: 'Belgium',
            type:'education',
            from: new Date("1999-08-01"),
            to: new Date("2002-06-01"), 
            description: "L’Ecole Supérieure des Arts du Cirque – ESAC"
        }          
    ]

  workExperienceSv:{heading:string,
                  type:string,
                  place?:string,
                  from:Date,
                  to:Date,
                  description:string}[]=
                   [
                     {
                       heading:"Arbetsförmedlingen IT – Solna",
                       type:'work',
                       from: new Date("2020-01-01"),
                       to: null, 
                       description: "Utvecklare främst frontend men även backend"
                     }
                     ,
                     {
                      heading:"Arbetsförmedlingen – Järfälla",
                      type:'work',
                      from: new Date("2017-01-01"),
                      to: new Date('2020-01-01'), 
                      description: "Handleda och vägleda arbetssökande i deras sökande efter ett nytt jobb."
                    },
                    {
                      heading:"Kista Bibliotek",
                      type:'work',
                      from: new Date('2015-01-01'),
                      to: new Date('2016-01-01'),
                      description:"Planera och utveckla arbetet med digitala resurser och kanaler på biblioteket. Fungera som digital pedagog samt agera innehållsproducent i digitala kanaler. Ansvara för vissa statistikuppgifter."
                    },
                    {
                      heading:"Kulturskolan",
                      type:'work',
                      from: new Date('2013-01-01'),
                      to: new Date('2015-01-01'),
                      description:"Driva cirkusenheten på Kulturskolan Stockholm. Detta inkluderar planerandet, genomförandet och utvärderandet utav Cirkusverksamheten. Leda det pedagogiska arbetet med medarbetarna."
                    },
                    {
                      heading:"The Palestinian Circus School",
                      type:'work',
                      from: new Date('2012-01-01'),
                      to: new Date('2013-01-01'),
                      description:"Pedagogisk samordnare"
                    },
                    {
                      heading:"Kulturskolan",
                      type:'work',
                      from: new Date('2008-01-01'),
                      to: new Date('2012-01-01'),
                      description:"Driva cirkusenheten på Kulturskolan Stockholm. Detta inkluderar planerandet, genomförandet och utvärderandet utav Cirkusverksamheten. Leda det pedagogiska arbetet med medarbetarna."
                    }
                    ,
                    {
                        heading:"The BOX entertainment",
                        type:'work',
                        from: new Date('1999-01-01'),
                        to: new Date('2008-01-01'),
                        description:"Egen företagare och frilansartist Producera, budgetera och marknadsföra konstnärliga event. Medverkade i produktioner som Melodiefestivalen, Super cirkör och flera andra."
                    },
                    {
                        heading: "Yrkeshögskoleexamen Javautvecklare, (IT-högskolan)",
                        place:"Stockholm",
                        type: 'education',
                        from: new Date('2019-01-01'),
                        to: new Date('2021-06-01'),
                        description: "Fullstack, både back-end och front-end."
                    },
                    {
                        heading: "Kandidatexamen i Nationalekonomi",
                        place: "Stockholms Universitet",
                        type: 'education',
                        from: new Date("2010-08-01"),
                        to: new Date("2015-06-01"), 
                        description: "Inkluderande 60 hp i matematik och statistik. Dessa 60hp inkluderade flera kurser i linjär algebra, envariabelsanalys, flervariabelsanalys, regressionsanalys, Multivariata metoder, Avancerad programmering i R."
                    },
                    {
                        heading: "Konstnärlig kandidatexamen i scenkonst",
                        place:"BELGIEN",
                        type: 'education',
                        from: new Date("1999-08-01"),
                        to: new Date("2002-06-01"), 
                        description: "L’Ecole Supérieure des Arts du Cirque – ESAC"
                    }
                  ]

}