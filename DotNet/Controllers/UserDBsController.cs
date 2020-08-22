using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Users.Models;

namespace Users.Controllers
{
    public class UserDBsController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/UserDBs
        public IQueryable<UserDB> GetUserDBs()
        {
            return db.UserDBs;
        }

       

        // PUT: api/UserDBs/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUserDB(string id, UserDB userDB)
        {
          

            if (id != userDB.Roletype)
            {
                return BadRequest();
            }

            db.Entry(userDB).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserDBExists(id))
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

        // POST: api/UserDBs
        [ResponseType(typeof(UserDB))]
        public IHttpActionResult PostUserDB(UserDB userDB)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.UserDBs.Add(userDB);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (UserDBExists(userDB.Roletype))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = userDB.Roletype }, userDB);
        }

        // DELETE: api/UserDBs/5
        [ResponseType(typeof(UserDB))]
        public IHttpActionResult DeleteUserDB(string id)
        {
            UserDB userDB = db.UserDBs.Find(id);
            if (userDB == null)
            {
                return NotFound();
            }

            db.UserDBs.Remove(userDB);
            db.SaveChanges();

            return Ok(userDB);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserDBExists(string id)
        {
            return db.UserDBs.Count(e => e.Roletype == id) > 0;
        }
    }
}