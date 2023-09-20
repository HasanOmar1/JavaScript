const book1 = {
    bookName : 'Harry Potter and the Cursed Child' ,
    author : 'J. K. Rowling' ,
    year : '2016'
}


const book2 = {
    bookName : 'A Song of Ice and Fire',
    author : 'George R. R. Martin',
    year : '1996'
}

const bookUtils = {

    getFirstPublished(){

        if(book1.year > book2.year){
            console.log(book2.bookName);
        }
        else{
            console.log(book1.bookName);
        }
    },

    setNewEdition(){
       book1.year = 2019;
       book2.year = 2005;
        
    },

    setLanguage(){
        book1.language = 'Arabic';
        book2.language = 'Hebrew';
    },

    setTranslation(){
        book1.Translator = 'English'
        book1.Translation = {language : book1.language , translator : book1.Translator}
        book2.Translator = 'English'
        book2.Translation = {language : book2.language , translator : book2.Translator}

       
    },

    setPublisher(){
        book1.publisher = {Name : 'Arthur A. Levine Books' , Location : 'USA'}
        book2.publisher = {Name : `Harper Collins; 12th edition` , Location : `USA`}

    },

    isSamePublisher(){
        book1.publisher === book2.publisher && book1.location === book2.location ? console.log(`Same Publisher`) : console.log(`Different publisher`);
    }


}

bookUtils.getFirstPublished();
bookUtils.setNewEdition();
bookUtils.setLanguage();
bookUtils.setTranslation();
bookUtils.setPublisher();
console.log(book1);
console.log(book2);
bookUtils.isSamePublisher();



