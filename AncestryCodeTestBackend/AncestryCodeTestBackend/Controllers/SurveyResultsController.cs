using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using AncestryCodeTestBackend.Models;

namespace AncestryCodeTestBackend.Controllers
{
    public class SurveyResultsController : ApiController
    {
        private AncestryCodeTestBackendContext db = new AncestryCodeTestBackendContext();

        // GET: api/SurveyResults
        public IQueryable<SurveyResult> GetSurveyResults()
        {
            return db.SurveyResults;
        }

        // GET: api/SurveyResults/5
        [ResponseType(typeof(SurveyResult))]
        public async Task<IHttpActionResult> GetSurveyResult(int id)
        {
            SurveyResult surveyResult = await db.SurveyResults.FindAsync(id);
            if (surveyResult == null)
            {
                return NotFound();
            }

            return Ok(surveyResult);
        }

        // PUT: api/SurveyResults/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutSurveyResult(int id, SurveyResult surveyResult)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != surveyResult.Id)
            {
                return BadRequest();
            }

            db.Entry(surveyResult).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SurveyResultExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/SurveyResults
        [ResponseType(typeof(SurveyResult))]
        public async Task<IHttpActionResult> PostSurveyResult(SurveyResult surveyResult)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.SurveyResults.Add(surveyResult);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = surveyResult.Id }, surveyResult);
        }

        // DELETE: api/SurveyResults/5
        [ResponseType(typeof(SurveyResult))]
        public async Task<IHttpActionResult> DeleteSurveyResult(int id)
        {
            SurveyResult surveyResult = await db.SurveyResults.FindAsync(id);
            if (surveyResult == null)
            {
                return NotFound();
            }

            db.SurveyResults.Remove(surveyResult);
            await db.SaveChangesAsync();

            return Ok(surveyResult);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SurveyResultExists(int id)
        {
            return db.SurveyResults.Count(e => e.Id == id) > 0;
        }
    }
}