using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AncestryCodeTestBackend.Models
{  
    public class MarketingSummaryDTO
    {        
        public double? AverageAgeOfResponders { get; set; }
        public double? AverageExperianceOfResponders { get; set; }
        public int     TotalNumberOfResults { get; set; }
        public IList   CountryDistribution { get; set; }
        public IList   GenderDistribution { get; set; }
    }
}