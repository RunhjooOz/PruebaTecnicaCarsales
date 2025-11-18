using PruebaTecnicaCarsales_Back.Models;
using System.Net.Http.Json;
using static PruebaTecnicaCarsales_Back.Servicios.Episodios_RyM_Servicios;

namespace PruebaTecnicaCarsales_Back.Servicios
{
    public class Episodios_RyM_Servicios : IEpisodios_RyM_Servicios
    {
        private readonly HttpClient _httpClient;

        public Episodios_RyM_Servicios(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<List<Episode>> ObtenerEpisodiosAsync()
        {
            var response = await _httpClient.GetFromJsonAsync<RickAndMortyEpisodesResponse>(
                "https://rickandmortyapi.com/api/episode"
            );

            return response?.results ?? new List<Episode>();
        }

    }
}
