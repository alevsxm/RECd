class Amazon

  def self.search(search_term)
    amazon_results = amazon_search(search_term)['ItemSearchResponse']['Items']['Item']

    search_results_array = []

    if amazon_results
      amazon_results.each do |result_hash|
        search_result_info = result_hash['ItemAttributes']

        search_result = {}
        search_result[:title] = search_result_info['Title']
        search_result[:author] = search_result_info['Author']
        search_result[:year_published] = search_result_info['PublicationDate']
        search_result[:plot_summary] = result_hash['EditorialReviews'] ? (result_hash['EditorialReviews']['EditorialReview'].kind_of?(Array) ? result_hash['EditorialReviews']['EditorialReview'][0]['Content'] : result_hash['EditorialReviews']['EditorialReview']['Content']) : "No Summary Available"
        search_result[:cover_url] = result_hash['LargeImage']['URL'] ? result_hash['LargeImage']['URL'] : "No Image"
        search_result[:amazon_url] = result_hash['DetailPageURL']

        search_results_array << search_result
      end
    else
      search_result = {}
      search_result[:title] = "No Results Found"
      search_results_array << search_result
    end

    search_results_array
  end

  def self.amazon_search(search_term)

    iso_time = "9999-12-31T23%3A59%3A59.000Z"

    key = ENV["AMAZON_SECRET_KEY"]
    access_key= ENV["AMAZON_API_KEY"]
    data = "GET\nwebservices.amazon.com\n/onca/xml\nAWSAccessKeyId=#{access_key}&AssociateTag=recd-20&Condition=All&Keywords=#{URI.escape(search_term)}&Operation=ItemSearch&ResponseGroup=Medium%2CItemAttributes%2COffers&SearchIndex=Books&Service=AWSECommerceService&Timestamp=#{iso_time}&Version=2011-08-01"

    sig_code = Base64.encode64(OpenSSL::HMAC.digest(OpenSSL::Digest.new('sha256'), key, data)).strip()

    data = data.split("\n")

    api_call = "http://"+data[1]+data[2]+"?"+data[3]+"&Signature="+CGI.escape(sig_code)
    HTTParty.get(api_call)

  end
end
