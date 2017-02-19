using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AncestryCodeTestBackend.Models
{

    public class CountryDistributionDTO
    {
        public string Country { get; set; }
        public int Count { get; set; }
    }

    public class GenderDistributionDTO
    {
        public Gender? Gender { get; set; }
        public int Count { get; set; }
    }

    public class MarketingSummaryDTO
    {        
        public double? AverageAgeOfResponders { get; set; }
        public double? AverageExperianceOfResponders { get; set; }
        public int     TotalNumberOfResults { get; set; }
        public IList<CountryDistributionDTO>   CountryDistribution { get; set; }
        public IList<GenderDistributionDTO>   GenderDistribution { get; set; }
    }
}