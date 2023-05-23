using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApiML.Models;

namespace WebApiML.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private static List<Movie> movies = new List<Movie>()
        {
            new Movie{id = 0,title = "Szklana pułapka",year=2001,category="Thriller"},
            new Movie{id = 1,title = "Drewniana pułapka",year=2002,category="Fantasy"},
            new Movie{id = 2,title = "Stalowa pułapka",year=2003,category="Horror"},
            new Movie{id = 3,title = "Plazmowa pułapka",year=2004,category="Thriller"},
            new Movie{id = 4,title = "Herbaciana pułapka",year=2005,category="Fantasy"},
            new Movie{id = 5,title = "Piżmowa pułapka",year=2006,category="Horror"},
        };

        [HttpGet]
        public IEnumerable<MovieResponse> GetAll(string? filtr)
        {
            return movies.Select(x => new MovieResponse(x.id, x.title, x.year, x.category));
        }

        [HttpGet("{id}")]
        public MovieResponse? GetOne(int id)
        {
            Movie? movie = movies.Find(x => x.id == id);
            if (movie != null)
            {
                return new MovieResponse(movie.id, movie.title, movie.year, movie.category);
            }

            return null;
        }

        [HttpGet("szukaj/{_title}")]
        public IEnumerable<MovieResponse> Get(string? _title)
        {

            if (_title != null)
            {

                IEnumerable<MovieResponse> result = (from movie in movies
                                                     where movie.title.Contains(_title)
                                                     select new MovieResponse(movie.id, movie.title, movie.year, movie.category)).ToArray();

                return result;
            }

            return movies.Select(x => new MovieResponse(x.id, x.title, x.year, x.category));
        }

        [HttpDelete("{id}")] //delete
        public bool Delete(int id)
        {
            Movie? movie = movies.Find(x => x.id == id);
            if (movie != null)
            {
                movies = movies.FindAll(x => x != movie);
                return true;
            }

            return false;
        }

        [HttpPut("{id}")]  //edit
        public MovieResponse? Put(int id, [FromBody] MovieRequest req)
        {
            Movie? movie = movies.Find(x => x.id == id);
            if (movie != null)
            {
                movie.title = req.title;
                movie.year = req.year;
                movie.category = req.category;

                return new MovieResponse(movie.id, movie.title, movie.year, movie.category);
            }
            return null;
        }

        [HttpPost] //add
        public MovieResponse Post([FromBody] MovieRequest req)
        {
            Movie movie = new Movie();
            movie.title = req.title;
            movie.year = req.year;
            movie.category = req.category;

            movie.id = movies.Max(x => x.id) + 1;
            movies.Add(movie);

            return new MovieResponse(movie.id, movie.title, movie.year, movie.category);
        }
    }
}
