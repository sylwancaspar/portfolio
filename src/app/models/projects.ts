export class ProjectClass{

    projectsListSv()
    {
        return this.projectObjectsSV
    }

    projectsListEng()
    {
        return this.projectObjectsEng
    }
    
    
    private projectObjectsEng:{
        type:string,
        href:string,
        photoPath:string,
        githubUrl:string,
        description:string
      }[] = [
        {
            type:"project",
            href:"https://github.com/sylwancaspar/portfolio",
            githubUrl:"https://github.com/sylwancaspar/portfolio",
            photoPath:"./assets/img/projects/webbPortfolioNew.png",
            description:"A new remake of my homepage with Angular 11 and StateMangement built in with Rxjs. Faster to load and with more modern tools than my older homepage."
        },
        {
          type:"project",
          href:"https://github.com/sylwancaspar/emailHompage",
          githubUrl:"https://github.com/sylwancaspar/emailHompage",
          photoPath:"./assets/img/projects/backend-emailservice.png",
          description:"Email service conntected to gmail and deployed on Heroku. The whole service is written in Java using spring-boot. The portfolio frontend is connected to email service by a rest endpoint."
        },
        {
          type:"project",
          href:"https://casparsylwan.github.io/movienight/",
          githubUrl:"https://github.com/casparsylwan/movienight",
          photoPath:"./assets/img/projects/movie.png",
          description:
          "(Work in progress) A website for a fictive cinema where you can even order food, candies and drinks that serves to your seat in the cinema room. It is for for 20 people. All orders are being listed seperately as to make it easier to see who orders and pays what. "+ 
          "The project is built with Angular. All animations are made with CSS and TypeScript. The payment page is removed as not to confuse navigators. "
        },
        {
          type:"project",
          href:"https://casparsylwan.github.io/TravelAgency/login",
          githubUrl:"https://github.com/casparsylwan/TravelAgency",
          photoPath:"./assets/img/projects/flyux.png",
          description:
          "(Work in progress) This is the frontend of a travel agency. The frontend is built with Angular 11 Rxjs. No external libraries have been used for the frontend. The frontend is hosted on github and it communicates with the backend by restful API service. " 
        },
        {
          type:"project",
          href:"https://casparsylwan.github.io/TravelAgency/login",
          githubUrl:"https://github.com/casparsylwan/TravelAgencyBackend",
          photoPath:"./assets/img/projects/flyux-backend.png",
          description:
          "(Work in progress) Order a trip with FlyUX. This is the backend of a Travel agency. The backend is built with Spring boot, Spring security and secured with JWT (Json Web Token), JPA/Hibernate and Postgressql as database. The backend is hosted on Heroku with a pipeline from my github. " 
        }
      ]
    
    
    
    private projectObjectsSV:{
        type:string,
        href:string,
        photoPath:string,
        githubUrl:string,
        description:string
      }[] = [
        {
            type:"project",
            href:"https://github.com/sylwancaspar/portfolio",
            githubUrl:"https://github.com/sylwancaspar/portfolio",
            photoPath:"./assets/img/projects/webbPortfolioNew.png",
            description:"Detta är en omtagning av min gamla hemsida, men denna gång gjord med Angular 11. Hemsidan laddar nu fortare, koden är renare och har fler funktionaliteter."
        },
        {
          type:"project",
          href:"https://github.com/sylwancaspar/emailHompage",
          githubUrl:"https://github.com/sylwancaspar/emailHompage",
          photoPath:"./assets/img/projects/backend-emailservice.png",
          description:"Email servicen är kopplad till gmail och produktionsatt på Heroku. Tjänsten är helt skriven i Java, spring-boot. Hemsidan är kopplad till email tjänsten via en rest api endpoint."
        },
        {
          type:"project",
          href:"https://casparsylwan.github.io/movienight/",
          githubUrl:"https://github.com/casparsylwan/movienight",
          photoPath:"./assets/img/projects/movie.png",
          description:
          "(Work in progress) En biografhemsida där det går att beställa godis, mat och dryck till 20 personer. Detta levereras sedan till sittplatsen. Alla beställningar separeras så att det ska bli lätt att se vem som ska betala vad. Projektet är helt gjort med Angular. Alla animationer är gjorda med CSS och TypeScript. Sista sidan när det kommer till betalning är borttagen så att ingen ska bli lurad."
        },
        {
          type:"project",
          href:"https://casparsylwan.github.io/TravelAgency/login",
          githubUrl:"https://github.com/casparsylwan/TravelAgency",
          photoPath:"./assets/img/projects/flyux.png",
          description:
          "(Work in progress) Beställ en resa med FlyUX. Detta projekt är fronted till projektet och ligger på Github-pages. Det hör ihop med backend FlyUx som är byggt med Spring boot och Postgress sql. En automatisk build pipline är byggd till Heroku. " 
        },
        {
          type:"project",
          href:"https://casparsylwan.github.io/TravelAgency/login",
          githubUrl:"https://github.com/casparsylwan/TravelAgencyBackend",
          photoPath:"./assets/img/projects/flyux-backend.png",
          description:
          "(Work in progress) Beställ en resa med FlyUX. Detta projekt är Backend till projektet och ligger på Heroku. Det hör ihop med backend FlyUx som är byggt med Spring boot och Postgress sql. En automatisk build pipeline är byggd till Heroku. " 
        }
      ]
    

}