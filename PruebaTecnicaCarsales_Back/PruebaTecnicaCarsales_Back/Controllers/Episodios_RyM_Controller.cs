using Microsoft.AspNetCore.Mvc;
using PruebaTecnicaCarsales_Back.Models;
using PruebaTecnicaCarsales_Back.Servicios;

namespace PruebaTecnicaCarsales_Back.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Episodios_RyM_Controller : ControllerBase
    {
        private readonly IEpisodios_RyM_Servicios _episodiosService;

        public Episodios_RyM_Controller(IEpisodios_RyM_Servicios episodiosService)
        {
            _episodiosService = episodiosService;
        }

        [HttpGet]
        public async Task<IActionResult> GetEpisodios()
        {

                var episodios = await _episodiosService.ObtenerEpisodiosAsync();
                return Ok(episodios);


        }
    }
}
