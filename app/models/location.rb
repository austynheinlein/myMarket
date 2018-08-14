class Location

  # ==================================================
  #                      SET UP
  # ==================================================
  # connect to postgres
  if(ENV['DATABASE_URL'])
        uri = URI.parse(ENV['DATABASE_URL'])
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
        "phone" => result["phone"],
        "county" => result["county"]
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
      "phone" => result["phone"],
      "county" => result["county"]
    }
  end

  # create new location
  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO locations (company_name, address, image, phone, county)
        VALUES ('#{opts["company_name"]}', '#{opts["address"]}', '#{opts["image"]}', '#{opts["phone"]}', '#{opts["county"]}')
        RETURNING id, company_name, address, image, phone, county;
      SQL
    )
    result = results.first
    return {
      "id" => result["id"].to_i,
      "company_name" => result["company_name"],
      "address" => result["address"],
      "image" => result["image"],
      "phone" => result["phone"],
      "county" => result["county"]
    }
  end

  # delete one (by id)
  def self.delete(id)
    results = DB.exec("DELETE FROM locations WHERE id=#{id};")
    return {"deleted" => true}
  end

  # update location (by id)
  def self.update(id, opts)
    results = DB.exec(
      <<-SQL
        UPDATE locations
        SET company_name='#{opts["company_name"]}', address='#{opts["address"]}', image='#{opts["image"]}', phone='#{opts["phone"]}', county='#{opts["county"]}'
        WHERE id=#{id}
        RETURNING id, company_name, address, image, phone, county;
      SQL
    )
    result = results.first
    return {
      "id" => result["id"].to_i,
      "company_name" => result["company_name"],
      "address" => result["address"],
      "image" => result["image"],
      "phone" => result["phone"],
      "county" => result["county"]
    }
  end

end
