using AncestryCodeTestBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;

namespace AncestryCodeTestBackend.Controllers
{
    public class MarketingSummaryController : ApiController
    {
        private AncestryCodeTestBackendContext db = new AncestryCodeTestBackendContext();

        // GET api/<controller>
        [ResponseType(typeof(MarketingSummaryDTO))]
        public async Task<IHttpActionResult> Get()
        {
            var result = db.SurveyResults;

            var dto = new MarketingSummaryDTO
            {
                TotalNumberOfResults = result.Count(),
                AverageAgeOfResponders = result.Average(SurveyResult => SurveyResult.Age),
                AverageExperianceOfResponders = result.Average(SurveyResult => SurveyResult.Experience),
                CountryDistribution = result.GroupBy(SurveyResult => SurveyResult.Country).Select(x => new { Country = x.Key, Count = x.Count() }).ToList(),
                GenderDistribution =  result.GroupBy(SurveyResult => SurveyResult.Gender).Select(x => new { Gender = x.Key, Count = x.Count() }).ToList()
            };

            return Ok(dto);
        }      
    }
}