using System;

namespace NorthWind.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal unitPrice { get; set; }
        public int unitInStock { get; set; }
    }
}
