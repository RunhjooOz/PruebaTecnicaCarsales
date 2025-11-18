using PruebaTecnicaCarsales_Back.Models;

namespace PruebaTecnicaCarsales_Back.Servicios
{

        public interface IEpisodios_RyM_Servicios
        {
            Task<List<Episode>> ObtenerEpisodiosAsync();
        }
    
}
