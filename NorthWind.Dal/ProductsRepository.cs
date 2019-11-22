using Microsoft.EntityFrameworkCore;
using NorthWind.Entities;
using System;
using System.Collections.Generic;
using System.Linq;

namespace NorthWind.Dal
{
    public class ProductsRepository
    {
        public List<Product> GetAll()
        {
            //no hay que usar el using como llave
            using var Context = new NorthWindContext();
            return Context.Products.ToList();
        }

        public Product GetById(int id)
        {
            using var Context = new NorthWindContext();
            return Context.Products.Where(p => p.Id == id).FirstOrDefault();
        }

        public Product Create(Product product)
        {
            using var Context = new NorthWindContext();
            Context.Add(product);
            Context.SaveChanges();
            return product;
        }

        public void Update(Product product)
        {
            using var Context = new NorthWindContext();
            Context.Update(product);
            Context.SaveChanges();
        }

        public void Delete(int id)
        {
            using var Context = new NorthWindContext();
            Context.Remove(new Product { Id = id });
            Context.SaveChanges();
        }
    }
}