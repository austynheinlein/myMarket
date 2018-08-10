class Location

  # ==================================================
  #                      SET UP
  # ==================================================
  # connect to postgres
  if(ENV['https://my-markets.herokuapp.com/'])
        uri = URI.parse(ENV['https://my-markets.herokuapp.com/'])
        DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
  else
      DB = PG.connect(host: "localhost", port: 5432, dbname: 'myMarket_development')
  end


  # ==================================================
  #                      ROUTES
  # ==================================================

  # get all
  def self.all
    results = DB.exec("SELECT * FROM locations;")
    return results.map do |result|
      {
        "id" => result["id"].to_i,
        "company_name" => result["company_name"],
        "address" => result["address"],
        "image" => result["image"],
        "phone" => result["phone"]
      }
    end
  end


  # get one (by id)
  def self.find(id)
    results = DB.exec("SELECT * FROM locations WHERE id=#{id};")
    result = results.first
    return {
      "id" => result["id"].to_i,
      "company_name" => result["company_name"],
      "address" => result["address"],
      "image" => result["image"],
      "phone" => result["phone"]
    }
  end

end
