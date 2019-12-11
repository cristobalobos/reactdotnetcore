using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using NorthWind.Dal;
using NorthWind.Entities;
using Microsoft.AspNetCore.Authorization;

namespace NorthWind.Spa.Controllers
{
    [Produces("application/json")]
    [EnableCors("CORSReactPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    
    public class ProductsController : ControllerBase
    {
        readonly NorthWind.Dal.ProductsRepository Repository;
        public ProductsController(ProductsRepository repository)
        {
            this.Repository = repository;
        }

        [HttpGet]
        public List<Product> Get()
        {
            return Repository.GetAll();
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(Repository.GetById(id));
        }

        [HttpPost]
        public IActionResult Post([FromBody] Product product)
        {
            return Ok(Repository.Create(product));
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Product product)
        {
            product.Id = id;
            Repository.Update(product);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            
            Repository.Delete(id);
            return NoContent();
        }

    }
}