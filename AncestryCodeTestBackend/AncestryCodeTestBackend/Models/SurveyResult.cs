using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AncestryCodeTestBackend.Models
{
    public enum Gender
    {
        male,
        female
    }

    public class SurveyResult
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string EmailAddress { get; set; }

        public int? Age { get; set; }

        public Gender? Gender { get; set; }

        public string Country { get; set; }

        [Range(1, 5)]
        public int? Experiance { get; set; }

        public string SuggestedImprovements { get; set; }

        [DataType(DataType.Url)]
        public string OriginUrl { get; set; }

    }
}