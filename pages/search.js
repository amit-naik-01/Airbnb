import Header from "../components/Header";
import Footer from "../components/Footer";

function Search(){
    return(
    <div>
      <Header />
       <main className='flex'>
        <section>
          <p className="text-xs">300+ Stays for 5 number of Guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Place</h1>
          <div className="hidden lg:inline-flex">
            <p className="px-4 py-2 border rounded-full cursor-pointer hiver:shadow-lg active:scale-95 active:bg-gray-100 tansition transform duration-100 ease-out">Cancelllation Flexibility</p>
          </div>
        
        
        </section>
       </main>
      
      <Footer/>
    </div> 
    );

}
export default Search;